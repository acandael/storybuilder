import React from 'react';

import NavBar from './components/Nav/NavBar';
import StoryList from './containers/StoryList/StoryList';

import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <StoryList />
      </div>
    </div>
  );
}

export default App;
