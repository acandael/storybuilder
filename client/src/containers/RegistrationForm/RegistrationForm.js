import React, { useState } from 'react';
import { register } from '../../ApiService';
import { useHistory } from 'react-router-dom';

import './RegistrationForm.css';

export const RegistrationForm = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    successMessage: null,
  });

  let history = useHistory();

  const [created, setCreated] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError('Passwords do not match');
    }
  };

  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        email: state.email,
        password: state.password,
      };

      register(payload)
        .then(function (response) {
          console.log(response);
          if ((response.message = 'user created')) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                'Registration successfull. Redirecting to home page...',
            }));
            setCreated(true);
            props.showError(null);
          } else {
            props.showError('Some error occured');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError('Please enter valid email and password');
    }
  };

  const redirectToHome = () => {};

  const redirectToLogin = () => {
    history.push('/login');
  };

  return (
    <div className="registration-form">
      <form>
        <h1>Sign Up</h1>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="enter email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button className="btn-register" onClick={handleSubmit}>
          Register
        </button>
        <div className="login-message">
          <span>Already have an account? </span>
          <span className="login-text" onClick={() => redirectToLogin()}>
            Login here
          </span>
        </div>
      </form>
      <div
        className="alert"
        style={{ display: state.successMessage ? 'block' : 'none' }}
        role="alert"
      >
        {state.successMessage}
      </div>
    </div>
  );
};

export default RegistrationForm;
