import React from 'react';
import { Link } from 'react-router-dom';

const TraitsQuiz = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
};

export default TraitsQuiz;
