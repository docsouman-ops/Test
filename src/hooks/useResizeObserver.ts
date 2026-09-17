import { useState, useEffect, useRef, useCallback } from 'react';

export interface ContainerDimensions {
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'landscape' | 'portrait' | 'square';
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  scaleFactor: number;
  isCompactHeight: boolean;
  isUltraWide: boolean;
}

interface UseResizeObserverOptions {
  debounceMs?: number;
  referenceWidth?: number;
  referenceHeight?: number;
  minScale?: number;
  maxScale?: number;
  onResize?: (dims: ContainerDimensions) => void;
}

const getBreakpoint = (width: number): 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
  if (width < 480) return 'xs';
  if (width < 640) return 'sm';
  if (width < 768) return 'md';
  if (width < 1024) return 'lg';
  if (width < 1280) return 'xl';
  return '2xl';
};

const getOrientation = (width: number, height: number): 'landscape' | 'portrait' | 'square' => {
  if (height === 0) return 'landscape';
  const ratio = width / height;
  if (ratio > 1.1) return 'landscape';
  if (ratio < 0.9) return 'portrait';
  return 'square';
};

export function useResizeObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseResizeObserverOptions = {}
) {
  const {
    debounceMs = 0,
    referenceWidth = 1440,
    referenceHeight = 900,
    minScale = 0.65,
    maxScale = 1.35,
    onResize,
  } = options;

  const targetRef = useRef<T | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const [dimensions, setDimensions] = useState<ContainerDimensions>(() => {
    const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const initialHeight = typeof window !== 'undefined' ? window.innerHeight : 900;
    const ratio = initialHeight > 0 ? initialWidth / initialHeight : 16 / 9;

    const widthRatio = initialWidth / referenceWidth;
    const heightRatio = initialHeight / referenceHeight;
    const rawScale = Math.min(widthRatio, heightRatio);
    const clampedScale = Math.max(minScale, Math.min(maxScale, rawScale));

    return {
      width: initialWidth,
      height: initialHeight,
      aspectRatio: ratio,
      orientation: getOrientation(initialWidth, initialHeight),
      breakpoint: getBreakpoint(initialWidth),
      scaleFactor: clampedScale,
      isCompactHeight: initialHeight < 680,
      isUltraWide: ratio > 2.1,
    };
  });

  const updateDimensions = useCallback(
    (entry: ResizeObserverEntry | null) => {
      let width = 0;
      let height = 0;

      if (entry) {
        if (entry.contentBoxSize && entry.contentBoxSize[0]) {
          width = entry.contentBoxSize[0].inlineSize;
          height = entry.contentBoxSize[0].blockSize;
        } else if (entry.contentRect) {
          width = entry.contentRect.width;
          height = entry.contentRect.height;
        }
      }

      // Fallback to bounding client rect if zero
      if (width === 0 && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
      }

      // Fallback to window if still zero
      if (width === 0 && typeof window !== 'undefined') {
        width = window.innerWidth;
        height = window.innerHeight;
      }

      const ratio = height > 0 ? width / height : 16 / 9;
      const widthRatio = width / referenceWidth;
      const heightRatio = height / referenceHeight;
      // Balance width and height constraints to prevent overflow in both dimensions
      const rawScale = Math.min(widthRatio * 0.95, heightRatio * 1.05);
      const clampedScale = Math.max(minScale, Math.min(maxScale, rawScale));

      const newDims: ContainerDimensions = {
        width: Math.round(width),
        height: Math.round(height),
        aspectRatio: parseFloat(ratio.toFixed(2)),
        orientation: getOrientation(width, height),
        breakpoint: getBreakpoint(width),
        scaleFactor: parseFloat(clampedScale.toFixed(3)),
        isCompactHeight: height < 680,
        isUltraWide: ratio > 2.1,
      };

      setDimensions(newDims);
      onResize?.(newDims);

      // Set CSS Custom Properties on the container element for declarative CSS scaling
      if (targetRef.current) {
        targetRef.current.style.setProperty('--container-w', `${newDims.width}px`);
        targetRef.current.style.setProperty('--container-h', `${newDims.height}px`);
        targetRef.current.style.setProperty('--container-aspect', `${newDims.aspectRatio}`);
        targetRef.current.style.setProperty('--container-scale', `${newDims.scaleFactor}`);
      }
    },
    [referenceWidth, referenceHeight, minScale, maxScale, onResize]
  );

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    // Initial measurement
    updateDimensions(null);

    let observer: ResizeObserver | null = null;

    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver((entries) => {
        if (!entries || !entries.length) return;
        const entry = entries[0];

        if (debounceMs > 0) {
          if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
          timeoutIdRef.current = setTimeout(() => {
            updateDimensions(entry);
          }, debounceMs);
        } else {
          // Use requestAnimationFrame for smooth 60fps throttled update
          if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
          frameIdRef.current = requestAnimationFrame(() => {
            updateDimensions(entry);
          });
        }
      });

      observer.observe(element);
    } else {
      // Fallback for environments lacking ResizeObserver
      const handleWindowResize = () => updateDimensions(null);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }

    return () => {
      if (observer) observer.disconnect();
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [updateDimensions, debounceMs]);

  return { ref: targetRef, dimensions };
}
