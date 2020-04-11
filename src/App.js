import React from 'react';
import ReactDom from 'react-dom';

function MovieItem(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.vote_average}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem title="Title new" vote_average={10.1} /> 
    </div>
  );
}

export default App;
