import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import signupLogin from '../apis/signup-login';
import './Login.scss';

const Login = props => {
  const [messageObj, setMessageObj] = useState({ message: '', success: null });

  const queries = useLocation().search;
  const continuePath = new URLSearchParams(queries).get('continue');

  const redirect = () => {
    const path = continuePath || '/';
    navigate(path);
  };

  const navigate = useNavigate();

  const renderMessage = () => {
    if (!messageObj.message) return null;

    return (
      <div className={`ui message ${messageObj.success ? 'blue' : 'red'}`}>
        {messageObj.message}
      </div>
    );
  };

  const loginUser = async data => {
    try {
      setMessageObj({ message: 'Loading...', success: true });

      const res = await signupLogin.post('/login', data);

      setMessageObj({ message: 'User logged in successfully', success: true });

      props.loginHandler(res.data.data.user);

      redirect();
    } catch (error) {
      setMessageObj({ message: error.response.data.message, success: false });
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    const formData = e.target;

    const data = {
      email: formData.email.value,
      password: formData.password.value,
    };

    loginUser(data);
  };

  return (
    <div className="ui container segment" style={{ marginTop: '2rem' }}>
      <h1>Login</h1>

      <form
        style={{ marginTop: '2rem', paddingBottom: '2rem' }}
        className="ui form"
        onSubmit={submitHandler}
      >
        <div className="two fields">
          <div className="field">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="johnsmith@gmail.com"
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
        </div>

        <button type="submit" className="ui button primary">
          Login
        </button>
      </form>

      {renderMessage()}
    </div>
  );
};

export default Login;
