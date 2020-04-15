import React from 'react';
import Story from './components/Story/Story';
import NavBar from './components/Nav/NavBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Story />
    </div>
  );
}

export default App;
