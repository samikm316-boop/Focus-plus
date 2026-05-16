import React from "react";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import RootNavigator from "./navigation/RootNavigator.jsx";

import React, { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [user, setUser] = useState(null);

  // ✅ AUTO LOGIN RESTORE
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  // ❌ NOT LOGGED IN → LOGIN SCREEN
  if (!user) {
    return <LoginScreen onLogin={setUser} />;
  }

  // ✅ LOGGED IN → APP
  return (
    <div>
      <HomeScreen user={user} />

      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: "8px 12px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
