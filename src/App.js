import React, { Component } from "react";
import { Card } from "./components/card-list/card-list";
import "./App.css";
import SearchBox from "./components/search-box/search-component";

export default class App extends Component {
  // craete the state
  constructor() {
    super();
    this.state = {
      monsters: [],
      seacrhField: "",
    };
  }

  // get data from API and convert to json format
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    // filter the items all in lowerCase to match the input text
    //trigger the function and pass to Card tag
    const { monsters, seacrhField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(seacrhField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">MONSTERS</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={(e) => this.setState({ seacrhField: e.target.value })}
        />
        {/* pass to Card.js   */}
        <Card monsters={filterMonsters} />
      </div>
    );
  }
}
