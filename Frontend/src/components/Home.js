import React from 'react';

import Nav from './Nav';

const Home = props => {
  return (
    <div className="ui container">
      <Nav logoutHandler={props.logoutHandler} />

      <h1
        style={{
          fontSize: '2rem',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        Hi {props.user?.name}
      </h1>
    </div>
  );
};

export default Home;
