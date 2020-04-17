import React from 'react';

import NavBar from './containers/Nav/NavBar';
import StoryList from './containers/StoryList/StoryList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoryPage from './components/StoryPage/StoryPage';

import './App.css';

import { getStories, postStory } from './ApiService';

function App() {
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
              <StoryList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
