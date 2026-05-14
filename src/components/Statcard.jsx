export default function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card card">
      <div className="stat-icon">{icon}</div>

      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
}
