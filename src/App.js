import React from 'react';
import ReactDom from 'react-dom';

const movie = {
  title: "Avengers: Infinity War",
  vote_average: 8.5,
  image: "https://v1.popcornnews.ru/k2/news/970/upload/Rqci0u.jpg", 
  overview: "As the Avengers and their allies have continued to protect the world from threats"
};

function Image(props) {
  console.log ("Image props", props);
  return <img src={props.src} alt={props.alt} />;
}

// function MovieItem(props) {
//   console.log ("props", props);
//   const {data: { title, vote_average, image } } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_average}</p>
//     </div>
//   );
// }

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show:false
    };
  }

  render() {
    const {data: { title, vote_average, image, overview } } = this.props;
    console.log ("state", this.state);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <button 
          type="button"
          onClick={() => {
            console.log("show");
            this.setState({
              show: true
            })
          }}
          >Show</button>
        {this.state.show ? <p>{overview}</p> : null}
    </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data = {movie} /> 
    </div>
  );
}

export default App;
