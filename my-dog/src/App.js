import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import React from 'react';


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
  return (
    <PhoneFrame>
    <div className="container">
      <NavBar />
      <SearchBar />
      <PostList/>
    </div>
    </PhoneFrame>
  );
}

export default App;
