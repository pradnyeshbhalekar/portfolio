const GRID = 32;
const CENTER = GRID / 2 - 0.5;
const OUTER_R = GRID / 2 - 0.5;
const LABEL_R = OUTER_R * 0.34;
const HOLE_R = OUTER_R * 0.08;

const DISC_DARK = "#0a0f16";
const DISC_LIGHT = "#182432";
const GROOVE = "#26364a";
const RIM = "#000000";
const LABEL_FILL = "#8a4a12";
const LABEL_RING = "#4a2409";
const HOLE_FILL = "#020617";

// Precompute the pixel grid once — it never depends on props.
const PIXELS = [];
for (let y = 0; y < GRID; y++) {
  for (let x = 0; x < GRID; x++) {
    const dx = x - CENTER;
    const dy = y - CENTER;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d > OUTER_R + 0.35) continue;

    let fill;
    if (d <= HOLE_R) {
      fill = HOLE_FILL;
    } else if (d <= LABEL_R) {
      fill = d >= LABEL_R - 0.9 ? LABEL_RING : LABEL_FILL;
    } else if (d >= OUTER_R - 0.6) {
      fill = RIM;
    } else {
      const band = Math.floor((OUTER_R - d) / 1.4) % 3;
      fill = band === 0 ? GROOVE : (x + y) % 2 === 0 ? DISC_LIGHT : DISC_DARK;
    }
    PIXELS.push({ x, y, fill });
  }
}

export default function NowPlayingVinyl({ isPlaying = true, size = 10 }) {
  return (
    <div
      className={isPlaying ? "animate-spin-slow" : ""}
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${GRID} ${GRID}`}
        shapeRendering="crispEdges"
      >
        {PIXELS.map(({ x, y, fill }) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />
        ))}
      </svg>
    </div>
  );
}
