import { useState } from "react";

import "./App.css";
import SplashPage from "./pages/SplashPage/SplashPage.jsx";
import MainPage from "./pages/MainPage/index.jsx";

function App() {
  const [bootCompleted, setBootCompleted] = useState(false);

  return bootCompleted ? (
    <MainPage />
  ) : (
    <SplashPage onBootComplete={() => setBootCompleted(true)} />
  );
}

export default App;
