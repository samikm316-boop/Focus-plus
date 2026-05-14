export default function TaskCard({ title, xp }) {
  return (
    <div className="task-card card">
      <div>
        <h3>{title}</h3>
        <p>Complete task</p>
      </div>

      <div className="xp-pill">
        🔥 {xp} XP
      </div>
    </div>
  );
}
