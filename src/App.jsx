import React, {Component} from 'react'
import './App.css'
import Movie from './Movie'
import Error from './Error'
import {FormGroup , FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
const api_key = 'aa687b50d42533fdcca48bf4ec7eb94b';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query:null,
      movie:null
    }
  }

  getMovieId(searchKeyword){
    const SearchUrl = `https://api.themoviedb.org/3/search/movie?query=%${this.state.query}&api_key=${api_key}`;

    fetch(SearchUrl).
    then(response => response.json()).
     then(json => {
       var flag = json.success;

       if(flag === undefined){
         this.setState({movie:json.results[0]});
       }else if (!flag) {
         console.log('error');
       }
    })
  }

  render(){
    return(
      <div className="App">
          <div className="App-title">The Movie Database Application</div>
          <FormGroup>
            <InputGroup>
              <FormControl
                type = "text"
                placeholder="Search for Movie"
                value = {this.state.query}
                onChange = {event=>{this.setState({query:event.target.value})}}
                onKeyPress = {event=>{
                  if(event.key === 'Enter'){
                  this.getMovieId(this.state.query);
                  console.log(this.state.movie);
                  }
                }}
              />
              <InputGroup.Addon>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          {
            this.state.movie !==null?
            <Movie
              movie = {this.state.movie}
            />:
            <div></div>
          }

        </div>
    )
  }
}
//https://api.themoviedb.org/3/movie/${movieID}?&api_key=cfe422613b250f702980a3bbf9e90716
export default App;
