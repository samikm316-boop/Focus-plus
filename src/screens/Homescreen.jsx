import TopBar from "../components/TopBar";
import StatCard from "../components/StatCard";
import QuoteCard from "../components/QuoteCard";
import TaskCard from "../components/TaskCard";

export default function HomeScreen({ setSidebarOpen }) {
  return (
    <div className="screen">
      <TopBar
        title="Dashboard"
        setSidebarOpen={setSidebarOpen}
      />

      <div className="hero-card card gradient">
        <div>
          <h1>Welcome Back 👋</h1>
          <p>Keep your streak alive today.</p>
        </div>

        <div className="hero-level">
          LVL 3
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          icon="🔥"
          label="Streak"
          value="17"
        />

        <StatCard
          icon="⭐"
          label="Study XP"
          value="534"
        />

        <StatCard
          icon="🧠"
          label="Focus"
          value="89%"
        />
      </div>

      <div className="section-title">
        Today's Tasks
      </div>

      <TaskCard
        title="Complete Flashcards"
        xp="50"
      />

      <TaskCard
        title="Finish Math Notes"
        xp="80"
      />

      <QuoteCard />
    </div>
  );
}
