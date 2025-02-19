import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Signup from "./components/signup.tsx";
import LogIn from "./components/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>{" "}
  </StrictMode>
);
