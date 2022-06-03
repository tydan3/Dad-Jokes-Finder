import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      jokes: [],
      isFetchingJokes: false,
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
    this.randomJoke = this.randomJoke.bind(this);
  }

  randomJoke() {
    this.setState({ isFetchingJokes: true });
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const jokes = [{ id: json.id, joke: json.joke }];
        this.setState({
          jokes,
          isFetchingJokes: false,
        });
      });
  }

  searchJokes(limit = 20) {
    this.setState({ isFetchingJokes: true });
    fetch(
      `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        console.log(json.results);
        this.setState({
          jokes,
          isFetchingJokes: false,
        });
      });
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  renderJokes() {
    return (
      <ul className="jokes-list">
        {this.state.jokes.map((item) => (
          <li key={item.id}> {item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src={require("./logo.png")} alt="logo" />
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onSingleSearchClick={() => this.randomJoke()}
        />

        {this.state.isFetchingJokes
          ? "searching for jokes"
          : this.renderJokes()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App version="1.0" />, rootElement);
