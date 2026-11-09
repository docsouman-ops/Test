import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
  width?: number | string;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false, width = 72 }) => {
  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
      title="Scal It Up"
    >
      <svg
        viewBox="0 0 160 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Dynamic Chevron Arrow Mark */}
        <g>
          {/* Base Navy Chevron */}
          <path
            d="M8 38 L22 18 L36 38 L30 38 L22 26 L14 38 Z"
            fill={isLight ? "#ffffff" : "#0d1f2f"}
          />
          {/* Inner Orange Accent Arrow Soaring Up */}
          <path
            d="M16 44 L26 29 L36 44 L31 44 L26 36 L21 44 Z"
            fill="#f29b55"
          />
          <path
            d="M26 12 L33 22 L29 22 L26 17 L23 22 L19 22 Z"
            fill="#e85924"
          />
        </g>

        {/* Wordmark: SCAL IT UP */}
        <g transform="translate(42, 0)">
          <text
            x="0"
            y="26"
            fontFamily="'Figtree', sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="-0.03em"
            fill={isLight ? "#ffffff" : "#0d1f2f"}
          >
            SCAL
          </text>
          <text
            x="58"
            y="26"
            fontFamily="'Figtree', sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="-0.03em"
            fill="#e85924"
          >
            IT
          </text>
          <text
            x="81"
            y="26"
            fontFamily="'Figtree', sans-serif"
            fontWeight="800"
            fontSize="21"
            letterSpacing="-0.03em"
            fill="#176397"
          >
            UP
          </text>
          {/* Subline */}
          <text
            x="1"
            y="41"
            fontFamily="'Rubik', sans-serif"
            fontWeight="500"
            fontSize="7.5"
            letterSpacing="0.14em"
            fill={isLight ? "rgba(255,255,255,0.78)" : "#475e73"}
          >
            INTEGRATED MARKETING
          </text>
        </g>
      </svg>
    </div>
  );
};
