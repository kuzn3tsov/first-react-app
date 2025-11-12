import { useState } from 'react';
import Greeting from './components/Greeting';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <Greeting />

      <button onClick={handleAuthClick}>
        {isLoggedIn ? 'Sign out' : 'Sign in'}
      </button>

      {isLoggedIn ? <DashboardPage /> : <HomePage />}
    </div>
  );
}

export default App;