export default function NowPlayingVinyl({ isPlaying = true, size = 10 }) {
  return (
    <div
      className={`
        ${isPlaying ? "animate-spin-slow" : ""}
        w-[${size}px] h-[${size}px]
      `}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 16 16"
        shapeRendering="crispEdges"
      >
        {/* outer rim – circular */}
        <rect x="6" y="0" width="4" height="1" fill="#0b1220" />
        <rect x="4" y="1" width="8" height="1" fill="#0b1220" />
        <rect x="2" y="2" width="12" height="1" fill="#0b1220" />
        <rect x="1" y="3" width="14" height="1" fill="#0b1220" />
        <rect x="0" y="4" width="16" height="8" fill="#0b1220" />
        <rect x="1" y="12" width="14" height="1" fill="#0b1220" />
        <rect x="2" y="13" width="12" height="1" fill="#0b1220" />
        <rect x="4" y="14" width="8" height="1" fill="#0b1220" />
        <rect x="6" y="15" width="4" height="1" fill="#0b1220" />

        {/* disc surface */}
        <rect x="3" y="3" width="10" height="10" fill="#1e293b" />
        <rect x="4" y="2" width="8" height="12" fill="#1e293b" />

        {/* radial grooves (circular illusion) */}
        <rect x="6" y="3" width="4" height="1" fill="#263554" />
        <rect x="5" y="4" width="6" height="1" fill="#263554" />
        <rect x="4" y="5" width="8" height="1" fill="#263554" />
        <rect x="3" y="7" width="10" height="1" fill="#263554" />
        <rect x="3" y="8" width="10" height="1" fill="#263554" />
        <rect x="4" y="10" width="8" height="1" fill="#263554" />
        <rect x="5" y="11" width="6" height="1" fill="#263554" />
        <rect x="6" y="12" width="4" height="1" fill="#263554" />

        {/* inner clear ring */}
        <rect x="6" y="5" width="4" height="6" fill="#334155" />
        <rect x="5" y="6" width="6" height="4" fill="#334155" />

        {/* CD hole – unmistakable */}
        <rect x="7" y="7" width="2" height="2" fill="#020617" />
      </svg>
    </div>
  );
}