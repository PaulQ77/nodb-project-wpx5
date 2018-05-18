import React, { Component } from 'react';



export default class AddMovie extends Component {
    constructor(){
        super();

        this.state = {
            poster: '',
            genre: '',
            title : '',
            year : '',
            watched: 'Not Yet',
        }
    }

posterAdd(value){
    this.setState({
        poster: value
    })
    console.log(this.state)
}

genreAdd(value){
    this.setState({
        genre: value
    })
    console.log(this.state)
}

titleAdd(value){
    this.setState({
        title: value
    })
    console.log(this.state)
}

yearAdd(value){
    this.setState({
        year: value
    })
    console.log(this.state)
}

render(){
    let {poster, genre, title, year, watched} = this.state;
    return(
        <div id= 'new-movie'>
        Poster :
        <input className= 'input' value={this.state.poster} onChange={event => (this.posterAdd(event.target.value))}/>
        Genre : 
        <input className= 'input' value={this.state.genre} onChange={event => (this.genreAdd(event.target.value))}/>
        Title: 
        <input className= 'input' value={this.state.title} onChange={event => (this.titleAdd(event.target.value))}/>
        Year:
        <input className= 'input' value={this.state.year} onChange={event => (this.yearAdd(event.target.value))}/>

        <button className= 'button' onClick={() => {this.props.addMovie({poster, genre, title, year, watched}); }}>Submit New Movie</button>


        </div>
    )
}









}