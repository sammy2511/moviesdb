import React, {Component} from 'react'
import './App.css'
let backdropIMG;

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidUpdate() {
   document.body.style.backgroundImage = `url(${backdropIMG})`;
 }

  render(){
    let movie = null;
    movie = this.props.movie !== null ? this.props.movie : movie;
    if(movie !== null){
      var posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      let backdropIMG = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    }
    console.log(movie);
    return(

      movie === null ? <div>
        <h1 className = 'not-found'>Movie Not Found</h1>
      </div>:
      <div className = 'movie'>
        <div >
          <img className ='poster'
            alt = 'image'
            src = {posterUrl}
          />
        </div>
        <div className='movie-details'>
          <div className = 'movie-title'>{movie.title}</div>
          <p className = 'synopsis'>{movie.overview}</p>
          <div className='Average-title'>Average</div>
          <span className = 'Average'>{movie.vote_average}/10</span>
          <div className='release-title'>Release Date</div>
          <span className = 'date'>{movie.release_date}</span>

        </div>
      </div>
    )
  }


}

export default Movie;
