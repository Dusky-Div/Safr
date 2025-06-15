import { Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import LogIn from "./components/pages/Login";
import GetStarted from "./components/pages/GetStarted";
import Home from "./components/pages/Home";
import PasswordInput from "./components/templates/PasswordInputSections/PasswordInput";
import CreditCardInput from "./components/templates/PasswordInputSections/CreditCardInput";
import BankAccountInput from "./components/templates/PasswordInputSections/BankAccountInput";
import ApiKeyInput from "./components/templates/PasswordInputSections/ApiKeyInput";
import SecureNotesInput from "./components/templates/PasswordInputSections/SecureNoteInput";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/get-started" element={<GetStarted />} />

      {/* Main route with nested routes */}
      <Route path="/" element={<Home />}>
        <Route index element={null} />

        {/* Dynamic routes to render PasswordInput and CreditCardInput */}
        <Route path="enter-password-details" element={<PasswordInput />} />
        <Route path="enter-card-details" element={<CreditCardInput />} />
        <Route path="enter-bank-details" element={<BankAccountInput />} />
        <Route path="enter-api-details" element={<ApiKeyInput />} />
        <Route path="enter-note-details" element={<SecureNotesInput />} />
      </Route>
    </Routes>
  );
};

export default App;
