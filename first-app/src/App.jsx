import { useState } from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { Header } from "./components/Header.jsx";
import { ErrorPopup } from "./components/ErrorPopup.jsx";

const allowedUsers = {
  pperic: "password123!",
  dvukovic: "lozinka456!",
  krade: "ovonitkonecepogoditi",
};

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSignIn = (username, password) => {
    const userPassword = allowedUsers[username];

    if (userPassword && userPassword === password) {
      setUser(username);
      setError(null);
      setShowErrorPopup(false);
    } else {
      const errorMessage = "Invalid username or password";
      setError(errorMessage);
      setShowErrorPopup(true);
    }
  };

  const handleSignOut = () => {
    setUser(null);
    setError(null);
    setShowErrorPopup(false);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
    setError(null);
  };

  return (
    <>
      <Header onSignIn={handleSignIn} onSignOut={handleSignOut} user={user} />
      {user ? <DashboardPage /> : <HomePage />}
      {showErrorPopup && (
        <ErrorPopup message={error} onClose={closeErrorPopup} />
      )}
    </>
  );
}

export default App;