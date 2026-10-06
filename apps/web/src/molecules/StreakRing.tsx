export default function StreakRing({ value = 0.72 }) {
  const r = 16
  const c = 2 * Math.PI * r
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10 -rotate-90"
      aria-hidden="true"
    >
      <circle
        cx={"20"}
        cy={"20"}
        r={r}
        fill="none"
        strokeWidth={"4"}
        className="stroke-orange-100"
      />

      <circle
        cx={"20"}
        cy={"20"}
        r={r}
        fill="none"
        strokeWidth={"4"}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - value)}
        className="stroke-orange-400"
      />
    </svg>
  )
}
