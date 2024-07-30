import { Routes, Route } from "react-router-dom";
import "./assets/scss/App.scss";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import DailyPlanPage from "./pages/DailyPlanPage";
import NavBar from "./components/NavBar";
import useTheme from "./hooks/useTheme";
import SignUpPage from "./pages/SignUpPage";

function App() {
  // Access isDarkMode from useTheme hook
  const { isDarkMode } = useTheme();
  return (
    <div id="App" className={isDarkMode ? "dark-theme" : ""}>
      <NavBar />
      <div id="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/today/:username" element={<DailyPlanPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
