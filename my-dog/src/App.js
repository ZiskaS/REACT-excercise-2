import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import React, { useState } from 'react';
import Profile from './components/Profile';

function PhoneFrame({ children }) {
  return (
    <div className="phone-frame">
      <div className="content">
        {children}
      </div>
    </div>
  );
}

function App() {
  const [currentView, setCurrentView] = useState('postList');

  const handleLogoClick = () => {
    setCurrentView('postList');
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  return (
    <PhoneFrame>
    <div className="container">
    <NavBar
          onLogoClick={handleLogoClick}
          onProfileClick={handleProfileClick}
        />
      <SearchBar />
      {currentView === 'postList' ? <PostList /> : <Profile />}
    </div>
    </PhoneFrame>
  );
}

export default App;
