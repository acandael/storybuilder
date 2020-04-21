import React, { useState } from 'react';

import NavBar from './containers/Nav/NavBar';
import Footer from './containers/Footer/footer';
import StoryList from './containers/StoryList/StoryList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddStory from './components/AddStory/AddStory';
import ShowStory from './containers/ShowStory/ShowStory';
import RegistrationForm from './containers/RegistrationForm/RegistrationForm';
import LoginForm from './containers/LoginForm/LoginForm';
import AlertComponent from './components/AlertComponent/AlertComponent';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import './App.css';

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="container">
          <Switch>
            <PublicRoute path="/login">
              <LoginForm
                setIsLoggedIn={setIsLoggedIn}
                showError={updateErrorMessage}
              />
            </PublicRoute>
            <PublicRoute restricted={true} path="/register">
              <RegistrationForm showError={updateErrorMessage} />
            </PublicRoute>

            <PrivateRoute component={ShowStory} path="/stories/:id" exact />
            <Route path="/storypage">
              <AddStory />
            </Route>
            <PrivateRoute component={StoryList} path="/stories" exact />
          </Switch>
          <AlertComponent
            errorMessage={errorMessage}
            hideError={updateErrorMessage}
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
