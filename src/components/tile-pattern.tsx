export function TilePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="tiles" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect width="64" height="64" fill="none" />
          <path d="M0 0H64M0 32H64M0 64H64M0 0V64M32 0V64M64 0V64" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
          <rect x="2" y="2" width="28" height="28" fill="currentColor" opacity="0.04" />
          <rect x="34" y="34" width="28" height="28" fill="currentColor" opacity="0.04" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tiles)" />
    </svg>
  );
}
