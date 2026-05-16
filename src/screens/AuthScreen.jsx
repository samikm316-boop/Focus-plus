import React, { useState } from "react";
import { login, register } from "../api";

export default function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState("login"); // login | register

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      let res;

      if (mode === "login") {
        res = await login(email, password);
      } else {
        res = await register(email, password, username);
      }

      if (!res?.token) {
        setError(res?.message || "Auth failed");
        setLoading(false);
        return;
      }

      // ✅ SAVE SESSION
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      onLogin(res.user);
    } catch (err) {
      setError("Server error");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Focus+</h1>

      <div style={styles.card}>
        <h2 style={{ marginBottom: 10 }}>
          {mode === "login" ? "Login" : "Create Account"}
        </h2>

        {mode === "register" && (
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        )}

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleSubmit} style={styles.button}>
          {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
        </button>

        <p
          onClick={() =>
            setMode(mode === "login" ? "register" : "login")
          }
          style={styles.switch}
        >
          {mode === "login"
            ? "Create account"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#0B0F1A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    padding: 12,
    borderRadius: 10,
    border: "1px solid #333",
    background: "#111827",
    color: "white",
  },
  button: {
    padding: 12,
    borderRadius: 10,
    background: "#6366F1",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  switch: {
    marginTop: 10,
    fontSize: 12,
    color: "#9CA3AF",
    cursor: "pointer",
  },
};
