import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Study from "../pages/Study";
import FocusAI from "../pages/FocusAI";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/study" element={<Study />} />
      <Route path="/ai" element={<FocusAI />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
