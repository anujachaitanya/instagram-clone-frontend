import React, { useState, useEffect } from 'react';
import './App.css';
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

  const container = user ? <Routes user={user} /> : <Login />;
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      {container}
    </BrowserRouter>
  );
}

export default App;
