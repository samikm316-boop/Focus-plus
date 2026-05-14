import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ThemeProvider from "../context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
