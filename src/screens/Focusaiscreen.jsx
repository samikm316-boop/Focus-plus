import TopBar from "../components/TopBar";

export default function FocusAIScreen({ setSidebarOpen }) {
  return (
    <div className="screen ai-screen">
      <TopBar
        title="Focus AI"
        setSidebarOpen={setSidebarOpen}
      />

      <div className="ai-chat card">
        <div className="ai-message">
          Hello 👋
          <br />
          Ask me anything about studies.
        </div>
      </div>

      <div className="ai-input-box">
        <input
          placeholder="Ask Focus AI..."
        />

        <button className="gradient">
          Send
        </button>
      </div>
    </div>
  );
}
