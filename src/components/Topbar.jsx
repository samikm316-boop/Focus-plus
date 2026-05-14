import { Menu } from "lucide-react";

export default function TopBar({ title, setSidebarOpen }) {
  return (
    <div className="topbar">
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu />
      </button>

      <h2>{title}</h2>

      <div className="profile-mini">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
        />
      </div>
    </div>
  );
}
