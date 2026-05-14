import {
  House,
  BookOpen,
  Brain,
  User,
  Settings,
} from "lucide-react";

export default function Sidebar({ setPage, setSidebarOpen }) {
  const items = [
    {
      name: "Home",
      icon: <House size={20} />,
      page: "home",
    },
    {
      name: "Study",
      icon: <BookOpen size={20} />,
      page: "study",
    },
    {
      name: "Focus AI",
      icon: <Brain size={20} />,
      page: "ai",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      page: "profile",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      page: "settings",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">FOCUS+</div>

      <div className="sidebar-menu">
        {items.map((item) => (
          <button
            key={item.page}
            className="sidebar-item"
            onClick={() => {
              setPage(item.page);
              setSidebarOpen(false);
            }}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
