export default function Home() {
  return (
    <div className="page">
      <div className="card hero">
        <h2>Welcome Back 👋</h2>
        <p>Your XP dashboard</p>
      </div>

      <div className="grid">
        <div className="card">🔥 Streak: 17</div>
        <div className="card">⚡ XP: 265</div>
        <div className="card">📚 Study XP: 534</div>
      </div>

      <div className="card">
        <h3>Today's Goals</h3>
        <p>• 10 Pushups</p>
        <p>• 20 Flashcards</p>
      </div>

      <div className="quote">
        Discipline today builds freedom tomorrow.
      </div>
    </div>
  );
}
