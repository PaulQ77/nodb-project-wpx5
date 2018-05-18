import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Display from './Display'
import AddMovie from './AddMovie';
import SelectGenre from './SelectGenre';
import Header from './Header';
// import Footer from './Footer';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedOption : '',
      newMovies : [],
      movies : [this.props.movies]
    }

    this.newMovie = this.newMovie.bind(this)
    this.selectGenre = this.selectGenre.bind(this)
    this.allMovies = this.allMovies.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.editMovie = this.editMovie.bind(this)
    this.handleChange= this.handleChange.bind(this)

  }

  // componentDidMount(){
  //   axios.get('/api/movies')
  //   .then(response => {
  //     console.log(response)
  //     this.setState(() => ({ movies: response.data}))
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }



  newMovie(obj){
    
    axios.post('/api/movies', obj).then (response =>{
      console.log(response.data)
      this.setState(() => ({ 
        newMovies: response.data
      }))
    })
  };

  selectGenre(genre){
    console.log(genre)
    axios.get(`/api/movies/${genre}`).then(response =>{
      this.setState({
        newMovies: response.data
      })
    })
  };

  allMovies(movies){
    axios.put(`/api/movies`).then(movies =>{
      this.setState({
        movies: movies
      })
    }).catch(err => console.log(err))
  };

  deleteMovie(id){
    axios.delete(`/api/movies/${id}`).then(response => {
      this.setState({
        newMovies : response.data
      })
    })
  };

  editMovie(id){
    axios.put(`/api/movies/${id}`).then(response => {
      this.setState({
        newMovies : response.data
      })
    }).catch(err => console.log(err))
  };

  handleChange(value) {
    console.log(value)
    if(value!=='Default'){
    this.setState({
      selectedOption: value
      })

      this.selectGenre();
    }
  }; 





  render() {
    let display = this.state.newMovies.map((element, index) =>{
      return (<Display key={element.id} movie={element} deleteMovie={this.deleteMovie} editMovie={this.editMovie} allMovies={this.allMovies}/>)
    })

    return(

      <main className= "App">
        <div className= "inner-container">
          <div className= "header">
            <Header header= {this.header}/>
          </div>
          <div className= "input">
            <br/><br/><AddMovie addMovie= {this.newMovie}/>
          </div>
      
        
          <SelectGenre changes={this.selectGenre} all={this.allMovies}/>
            {display}

        </div>
      </main>
      
    )    
  }
}
