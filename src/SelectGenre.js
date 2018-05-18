import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <h2>Choose Movie List by Genre: </h2>
        <select
          className="genre"
          onChange={event => this.props.changes(event.target.value)}
        >
          <option value="Default">Select</option>
          <option value="Adventure">Adventure</option>
          <option value="Horror">Horror</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comedy">Comedy</option>
        </select>
       

        <div className="Main-content">
        </div>
      </div>
    );
  }
}

export default App;