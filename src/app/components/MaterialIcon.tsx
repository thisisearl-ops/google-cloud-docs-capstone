import type { CSSProperties } from 'react';

type MaterialIconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  fill?: boolean;
};

export function MaterialIcon({
  name,
  size = 20,
  color,
  className,
  style,
  fill = false,
}: MaterialIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className ?? ''}`.trim()}
      style={{
        color,
        fontFamily: '"Material Symbols Outlined"',
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
        lineHeight: 1,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
