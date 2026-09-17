import React, { createContext, useContext, forwardRef } from 'react';
import { useResizeObserver, ContainerDimensions } from '../hooks/useResizeObserver';

interface AdaptiveContainerContextValue {
  dimensions: ContainerDimensions;
  fluidSize: (baseRem: number, minRem?: number, maxRem?: number) => string;
}

const AdaptiveContainerContext = createContext<AdaptiveContainerContextValue | null>(null);

export function useAdaptiveContainer() {
  const context = useContext(AdaptiveContainerContext);
  if (!context) {
    // Provide a graceful fallback if used outside provider
    return {
      dimensions: {
        width: typeof window !== 'undefined' ? window.innerWidth : 1440,
        height: typeof window !== 'undefined' ? window.innerHeight : 900,
        aspectRatio: 16 / 9,
        orientation: 'landscape' as const,
        breakpoint: 'xl' as const,
        scaleFactor: 1,
        isCompactHeight: false,
        isUltraWide: false,
      },
      fluidSize: (baseRem: number) => `${baseRem}rem`,
    };
  }
  return context;
}

export interface AdaptiveContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children: React.ReactNode | ((dims: ContainerDimensions) => React.ReactNode);
  as?: React.ElementType;
  fullViewport?: boolean;
  minHeight?: string;
  maxHeight?: string;
  autoScaleTypography?: boolean;
  referenceWidth?: number;
  referenceHeight?: number;
  minScale?: number;
  maxScale?: number;
  showTelemetryBadge?: boolean;
}

export const AdaptiveContainer = forwardRef<HTMLDivElement, AdaptiveContainerProps>(
  (
    {
      children,
      as = 'div',
      fullViewport = false,
      minHeight,
      maxHeight,
      autoScaleTypography = false,
      referenceWidth = 1440,
      referenceHeight = 900,
      minScale = 0.7,
      maxScale = 1.3,
      showTelemetryBadge = false,
      className = '',
      style,
      ...props
    },
    forwardedRef
  ) => {
    const Component = as as React.ElementType;
    const { ref: internalRef, dimensions } = useResizeObserver<HTMLDivElement>({
      referenceWidth,
      referenceHeight,
      minScale,
      maxScale,
    });

    // Merge internal observer ref with forwarded ref
    const setRefs = (element: HTMLDivElement | null) => {
      internalRef.current = element;
      if (typeof forwardedRef === 'function') {
        forwardedRef(element);
      } else if (forwardedRef) {
        forwardedRef.current = element;
      }
    };

    // Fluid typography calculation helper based on container width and height
    const fluidSize = (baseRem: number, minRem = baseRem * 0.7, maxRem = baseRem * 1.3) => {
      const scaled = baseRem * dimensions.scaleFactor;
      const clamped = Math.max(minRem, Math.min(maxRem, scaled));
      return `${clamped.toFixed(3)}rem`;
    };

    const containerStyle: React.CSSProperties = {
      ...style,
      ...(fullViewport ? { minHeight: minHeight || '100dvh', height: '100dvh' } : {}),
      ...(minHeight && !fullViewport ? { minHeight } : {}),
      ...(maxHeight ? { maxHeight } : {}),
      ...(autoScaleTypography
        ? {
            fontSize: `calc(1rem * ${dimensions.scaleFactor})`,
          }
        : {}),
    };

    return (
      <AdaptiveContainerContext.Provider value={{ dimensions, fluidSize }}>
        <Component
          ref={setRefs}
          className={`relative w-full overflow-hidden ${
            fullViewport ? 'h-[100dvh] min-h-[100dvh]' : ''
          } ${className}`}
          style={containerStyle}
          data-orientation={dimensions.orientation}
          data-breakpoint={dimensions.breakpoint}
          {...props}
        >
          {typeof children === 'function' ? children(dimensions) : children}

          {showTelemetryBadge && (
            <div className="absolute top-2 right-2 z-50 pointer-events-none opacity-40 hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono-tech text-neutral-400 border border-neutral-800">
              {dimensions.width}×{dimensions.height} ({dimensions.aspectRatio}:1) • {dimensions.breakpoint.toUpperCase()} • {(dimensions.scaleFactor * 100).toFixed(0)}%
            </div>
          )}
        </Component>
      </AdaptiveContainerContext.Provider>
    );
  }
);

AdaptiveContainer.displayName = 'AdaptiveContainer';
