import { Routes, Route } from "react-router";
import Signup from "./components/pages/Signup.tsx";
import LogIn from "./components/pages/Login.tsx";
import GetStarted from "./components/pages/GetStarted.tsx";
import Home from "./components/pages/Home.tsx";
import "prismjs/themes/prism.css"; // Or choose another theme

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  );
};

export default App;
