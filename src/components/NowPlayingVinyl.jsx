export default function NowPlayingVinyl({ isPlaying = false, size = 10 }) {
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
        {/* outer rim */}
        <rect x="4" y="0" width="8" height="16" fill="#1b2230" />
        <rect x="2" y="1" width="12" height="14" fill="#1b2230" />
        <rect x="1" y="2" width="14" height="12" fill="#1b2230" />
        <rect x="0" y="4" width="16" height="8" fill="#1b2230" />

        {/* main disc */}
        <rect x="3" y="2" width="10" height="12" fill="#2a3445" />
        <rect x="2" y="3" width="12" height="10" fill="#2a3445" />

        {/* inner ring */}
        <rect x="5" y="4" width="6" height="8" fill="#3a455c" />
        <rect x="4" y="5" width="8" height="6" fill="#3a455c" />

        {/* blue core */}
        <rect x="7" y="6" width="2" height="4" fill="#60a5fa" />
        <rect x="6" y="7" width="4" height="2" fill="#60a5fa" />
        <rect x="7" y="7" width="2" height="2" fill="#93c5fd" />

        {/* center hole */}
        <rect x="7" y="7" width="2" height="2" fill="#020617" />
      </svg>
    </div>
  );
}
