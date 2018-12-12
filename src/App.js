import React, { Component } from 'react';
import './App.css';
import { Input, Button } from 'semantic-ui-react'
import { SEARCH } from "./shared/constants";
import { getUser } from "./shared/GitHubService";

class App extends Component {

  state = {
    user: ''
  }
  
  handleSearchChange = (event) => {
    this.setState({ user: event.target.value });
  }

  handleSearch = async() => {
    const { user } = this.state;

    if (user) {
      const response = await getUser(user);
    }
  }

  render() {
    return (
      <div className="App">
        <Input loading icon='user' placeholder={SEARCH} onChange={this.handleSearchChange} />
        <Button primary onClick={this.handleSearch}>{SEARCH}</Button>
      </div>
    );
  }
}

export default App;
