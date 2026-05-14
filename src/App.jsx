import React from "react";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import RootNavigator from "./navigation/RootNavigator.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
