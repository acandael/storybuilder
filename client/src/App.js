import React, { useState, useEffect } from 'react';

import NavBar from './containers/Nav/NavBar';
import StoryList from './containers/StoryList/StoryList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoryPage from './components/StoryPage/StoryPage';

import './App.css';

import { getStories } from './ApiService';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories().then((stories) => setStories(stories));
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/storypage">
              <StoryPage />
            </Route>
            <Route path="/">
              <StoryList stories={stories} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
