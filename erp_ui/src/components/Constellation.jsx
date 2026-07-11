/**
 * Constellation — the app's signature motif.
 * A quiet field of connected nodes standing in for "people, linked."
 * Reused (at different scales/opacities) in the dashboard hero,
 * loading states, and empty placeholder pages.
 */
const NODES = [
  { x: 40, y: 36, r: 3.2, delay: "0s", slow: false },
  { x: 120, y: 20, r: 2.4, delay: "0.4s", slow: true },
  { x: 210, y: 58, r: 3.6, delay: "0.9s", slow: false },
  { x: 290, y: 24, r: 2.2, delay: "1.3s", slow: true },
  { x: 360, y: 70, r: 3, delay: "0.2s", slow: false },
  { x: 150, y: 96, r: 2.6, delay: "1.6s", slow: true },
  { x: 250, y: 110, r: 2, delay: "0.7s", slow: false },
  { x: 60, y: 108, r: 2.2, delay: "1.1s", slow: true },
];

const LINKS = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [0, 7],
  [5, 2],
];

export default function Constellation({ className = "", tone = "light" }) {
  const stroke = tone === "light" ? "rgba(255,255,255,0.18)" : "rgba(18,21,28,0.10)";
  const dot = tone === "light" ? "#E3C692" : "#B8863B";

  return (
    <svg
      viewBox="0 0 400 140"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {LINKS.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke={stroke}
          strokeWidth="1"
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={dot}
          className={n.slow ? "animate-driftSlow" : "animate-drift"}
          style={{ animationDelay: n.delay, transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}
    </svg>
  );
}
