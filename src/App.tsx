import { useNavigate } from "react-router";
function App() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
