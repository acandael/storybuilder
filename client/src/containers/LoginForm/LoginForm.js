import React, { useState } from 'react';
import './LoginForm.css';
import { login } from '../../ApiService';
import { useHistory } from 'react-router-dom';

export const LoginForm = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    login(payload).then(function (response) {
      if ((response.message = 'Auth successfull')) {
        localStorage.setItem('token', response.token);
        setState((prevState) => ({
          ...prevState,
          successMessage: 'Login successful. Redirecting to home page..',
        }));
        redirectToHome();
        props.showError(null);
      } else {
        props.showError('Auth failed');
      }
    });
  };

  const redirectToHome = () => {
    history.push('/stories');
  };

  const redirectToRegister = () => {
    history.push('/register');
  };

  return (
    <div className="login-form">
      <form>
        <h1>Login</h1>
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

        <button className="btn-login" onClick={handleSubmit}>
          Login
        </button>
        <div className="register-message">
          <span>Dont have an account? </span>
          <span className="login-text" onClick={() => redirectToRegister()}>
            Register
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

export default LoginForm;
