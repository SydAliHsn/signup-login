import React from 'react';
import Nav from './Nav';

const Contact = props => {
  return (
    <div className="ui container">
      <Nav logoutHandler={props.logoutHandler} />

      <h1>Contact US!</h1>
    </div>
  );
};

export default Contact;
