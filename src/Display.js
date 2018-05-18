import React, { Component } from 'react';
import './App.css';
// import '.Display.css';


export default class Display extends Component{

    render(){
        return(
        <div className= {this.props.movie.watched === false ? 'movieList' : 'movieWatched'}>
            <img className= 'display' src={this.props.movie.poster} alt=''/>
            <h2>{this.props.movie.title}</h2>
            <h3>{this.props.movie.genre}</h3>
            <h4>{this.props.movie.year}</h4>
            <h4>{this.props.movie.watched}</h4>
            
            <button onClick= {() => this.props.deleteMovie(this.props.movie.id)} className= 'delete-button'>Delete Movie</button>
            <button onClick={()=>this.props.editMovie(this.props.movie.id)}>Already Watched?</button><br/><br/>

        
        </div>
        )
    }   
}

