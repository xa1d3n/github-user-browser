import React, { Component } from 'react';
import './App.css';
import { Input, Button, Segment, Container, Loader} from 'semantic-ui-react'
import { SEARCH, SEARCH_USER, NO_USERS, NO_REPOS  } from "./shared/constants";
import { getUser, getRepos } from "./shared/GitHubService";
import User from './components/User'
import Repository from './components/Repository'

class App extends Component {

  state = {
    user: '',
    users: [],
    repos: [],
    isLoading: false,
    noResultsMessage: ''
  }
  
  handleSearchChange = (event) => {
    this.setState({ user: event.target.value });
  }

  handleSearchClick = async() => {
    const { user } = this.state;
    this.setState({ isLoading: true, repos: [], noResultsMessage: '' });

    let users = [];
    if (user) {
      const response = await getUser(user);
      users = response.items;
  
      if (Array.isArray(users)) {
        this.setState({ users });
      }
    }
    const noResultsMessage = users.length ? '' : NO_USERS;
    this.setState({ isLoading: false, noResultsMessage });
  }

  handleUserClick = async(repoUrl) => {
    this.setState({ users: [], isLoading: true, noResultsMessage: '' });
    const repos = await getRepos(repoUrl);

    if (Array.isArray(repos)) {
      this.setState({ repos });
    }
    const noResultsMessage = repos.length ? '' : NO_REPOS;
    this.setState({ isLoading: false, noResultsMessage });
  }

  render() {
    const { isLoading, noResultsMessage } = this.state;

    const users = this.state.users.map(user => (
      <Segment color='blue' onClick={() => this.handleUserClick(user.repos_url)} key={user.id} >
        <User user={user} />
      </Segment>
    ));

    const repos = this.state.repos.map(repo => (
      <Repository repo={repo} />
    ));

    return (
      <Container textAlign="center" className={"container"}>
        <Input loading={isLoading} icon='user' placeholder={SEARCH_USER} onChange={this.handleSearchChange} className="searchInput" />
        <Button primary onClick={this.handleSearchClick}>{SEARCH}</Button>
        <Loader active={isLoading} size="massive" />
        <p>{noResultsMessage}</p>
        { users }
        { repos }
      </Container>
    );
  }
}

export default App;
