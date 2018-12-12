import React, { Component } from 'react';
import './App.css';
import { Input, Button, Segment } from 'semantic-ui-react'
import { SEARCH } from "./shared/constants";
import { getUser, getRepos } from "./shared/GitHubService";
import User from './components/User'
import Repository from './components/Repository'

class App extends Component {

  state = {
    user: '',
    users: [],
    repos: [],
    isLoading: false
  }
  
  handleSearchChange = (event) => {
    this.setState({ user: event.target.value });
  }

  handleSearchClick = async() => {
    const { user } = this.state;
    this.setState({ isLoading: true });

    if (user) {
      const response = await getUser(user);
      const users = response.items;
      this.setState({ users, isLoading: false });
    }
  }

  handleUserClick = async(repoUrl) => {
    const repos = await getRepos(repoUrl);
    this.setState({ repos });
  }

  render() {
    const { isLoading } = this.state;

    const users = this.state.users.map(user => (
      <Segment onClick={() => this.handleUserClick(user.repos_url)} key={user.id} >
        <User user={user} />
      </Segment>
    ));

    const repos = this.state.repos.map(repo => (
      <Repository repo={repo} />
    ));

    return (
      <div className="App">
        <Input loading={isLoading} icon='user' placeholder={SEARCH} onChange={this.handleSearchChange} />
        <Button primary onClick={this.handleSearchClick}>{SEARCH}</Button>
        { users }
        { repos }
      </div>
    );
  }
}

export default App;
