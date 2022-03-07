import React from 'react';
import Nav from './Nav';

const About = props => {
  return (
    <div className="ui container">
      <Nav logoutHandler={props.logoutHandler} />

      <h1>ABOUT US!</h1>
    </div>
  );
};

export default About;
