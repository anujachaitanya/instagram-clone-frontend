import React, { useState, useEffect } from 'react';
import instaApi from './instaApi';
import Header from './components/Menubar/Header';
import Routes from './routes/Routes';
import Login from './components/Login/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    instaApi.isLoggedIn().then(({ isLoggedIn }) => setLogin(isLoggedIn));
  });

  if (isLoggedIn) {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    );
  }
  return <Login />;
}

export default App;
