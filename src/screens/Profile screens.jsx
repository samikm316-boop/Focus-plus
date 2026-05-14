import TopBar from "../components/TopBar";

export default function ProfileScreen({ setSidebarOpen }) {
  return (
    <div className="screen">
      <TopBar
        title="Profile"
        setSidebarOpen={setSidebarOpen}
      />

      <div className="profile-card card">
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
        />

        <h2>Samik</h2>

        <p>Level 3 Explorer</p>
      </div>
    </div>
  );
}
