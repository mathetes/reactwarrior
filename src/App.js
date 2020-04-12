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
  return <img width="100%" src={props.src} alt={props.alt} />;
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
      show:false,
      like:false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  }

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  }

  render() {
    const {data: { title, vote_average, image, overview } } = this.props;
    console.log ("state", this.state);
    return (
      <div style = {{width: "300px"}}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{display:"flex", justifyContent: "space-between"}}>
          <button type="button" onClick={this.toggleOverview}
            >{this.state.show ? "hide" : "show"}</button>
          <button 
            type="button" 
            onClick={this.handleLike}
            className= {this.state.like ? "btn--like" : ""}
          >Like</button>
        </div>
        
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
