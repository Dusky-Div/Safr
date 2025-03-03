import { Routes, Route } from "react-router";
import Signup from "./components/Signup.tsx";
import LogIn from "./components/Login.tsx";
import GetStarted from "./components/ui/GetStarted.tsx";
import Home from "./components/ui/Home.tsx";

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
