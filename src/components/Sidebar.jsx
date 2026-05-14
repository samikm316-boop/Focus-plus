import { useState } from "react";

export default function Sidebar({ setPage }) {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", page: "home" },
    { name: "Study", page: "study" },
    { name: "Focus AI", page: "ai" },
    { name: "Profile", page: "profile" },
    { name: "Settings", page: "settings" }
  ];

  return (
    <>
      <div className="topbar">
        <button onClick={() => setOpen(!open)}>☰</button>
        <h2>FOCUS+</h2>
      </div>

      {open && (
        <div className="sidebar">
          {menu.map((item) => (
            <div
              key={item.page}
              onClick={() => {
                setPage(item.page);
                setOpen(false);
              }}
              className="sidebar-item"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
