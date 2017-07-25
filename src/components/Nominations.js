import React from 'react';
import BookContainer from './BookContainer';

const Nominations = () => (
  <div className="nominations">
    <h2>Current Book</h2>
    <p>Harry Potter and the Goblet of Fire</p>
    <h2>Next book</h2>
    <p>Harry Potter and the Order of Phoenix</p>
    <h2>Voting in Progress</h2>
    <p>Harry Potter and the Half-Blood Prince</p>
    <button>+3</button>
    <p>Bridge to Terebithia</p>
    <button>+1</button>
  </div>
);
export default Nominations;