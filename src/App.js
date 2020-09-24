import React, { useState, useEffect } from 'react';
import './App.css';
import UserContext from './UserContext';
import instaApi from './instaApi';
import Header from './components/Menubar/Header';
import Routes from './routes/Routes';
import Login from './components/Login/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    instaApi.isLoggedIn().then(({ user }) => setUser(user));
  }, []);

  const container = user ? <Routes /> : <Login />;
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Header setUser={setUser} />
        {container}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
