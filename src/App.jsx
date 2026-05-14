import { useState } from "react";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Study from "./pages/Study";
import FocusAI from "./pages/FocusAI";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <Home />;
      case "study": return <Study />;
      case "ai": return <FocusAI />;
      case "profile": return <Profile />;
      case "settings": return <Settings />;
      default: return <Home />;
    }
  };

  return (
    <Layout setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}
