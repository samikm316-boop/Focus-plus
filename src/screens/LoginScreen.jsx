import React, { useState } from "react";
import { login } from "../api";

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    const res = await login(email, password);

    setLoading(false);

    if (!res?.token) {
      setError(res?.message || "Login failed");
      return;
    }

    // ✅ CRITICAL PART (TOKEN STORAGE)
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));

    onLogin(res.user);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Focus+</h1>

      <input
        style={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={styles.error}>{error}</p>}

      <button style={styles.button} onClick={handleLogin}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0B0F1A",
    color: "white",
    gap: "12px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    width: "260px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#111827",
    color: "white",
  },
  button: {
    padding: "12px 20px",
    width: "260px",
    borderRadius: "10px",
    border: "none",
    background: "#6366F1",
    color: "white",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
};
