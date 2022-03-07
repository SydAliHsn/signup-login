import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import signupLogin from '../apis/signup-login';

const Signup = props => {
  const queries = useLocation().search;
  const continuePath = new URLSearchParams(queries).get('continue') || '/';

  const navigate = useNavigate();

  const redirect = () => {
    navigate(continuePath);
  };

  const [messageObj, setMessageObj] = useState({ message: '', success: null });

  const renderMessage = () => {
    if (!messageObj.message) return null;
    return (
      <div className={`ui message ${messageObj.success ? 'blue' : 'red'}`}>
        {messageObj.message}
      </div>
    );
  };

  const createUser = async data => {
    try {
      setMessageObj({
        message: 'Loading...',
        success: true,
      });

      const res = await signupLogin.post('/signup', data);

      setMessageObj({
        message: 'User created successfully.',
        success: true,
      });

      props.signupHandler(res.data.data.user);

      redirect();
    } catch (error) {
    
      setMessageObj({
        message: error.response.data.message,
        success: false,
      });
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    const formData = e.target;

    const data = {
      password: formData.password.value,
      name: formData.name.value,
      email: formData.email.value,
      phone: formData.phone.value,
    };

    createUser(data);
  };

  return (
    <div
      className="ui container segment"
      style={{ marginTop: '2rem', marginBottom: '3rem' }}
    >
      <h1>Signup</h1>
      <form
        style={{ marginTop: '2rem', paddingBottom: '2rem' }}
        className="ui form"
        onSubmit={submitHandler}
      >
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input name="name" type="text" placeholder="John Smith" required />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              name="phone"
              type="tel"
              placeholder="123-456-789-910"
              required
            />
          </div>
        </div>

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
          Signup
        </button>
      </form>
      {renderMessage()}

      <div style={{ fontSize: '1.1rem' }}>
        Already have an account?{' '}
        <Link to={`/login?continue=${continuePath}`}>Sign in</Link> instead
      </div>
    </div>
  );
};

export default Signup;
