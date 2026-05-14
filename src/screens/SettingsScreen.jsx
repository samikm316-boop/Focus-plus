import React, {
  useContext,
} from "react";

import { ThemeContext } from "../../context/ThemeContext";

import GradientButton from "../../components/ui/GradientButton";

export default function SettingsScreen() {
  const { mode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div>
      <h1
        style={{
          color: "white",
          marginBottom: "20px",
        }}
      >
        Settings
      </h1>

      <GradientButton
        title={`Switch to ${
          mode === "dark"
            ? "Light"
            : "Dark"
        } Mode`}
        onClick={toggleTheme}
      />
    </div>
  );
}
