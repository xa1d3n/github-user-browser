import React, { PureComponent } from 'react'
import { Segment, Image } from 'semantic-ui-react'
import { getPullRequests } from "../shared/GitHubService"
import { OPEN_PRS } from '../shared/constants'

export default class Repository extends PureComponent {
  state = {
    pulls: []
  }

  async componentDidMount() {
    const { repo } = this.props;
    const pulls = await getPullRequests(repo.owner.login, repo.name)
    this.setState({ pulls })
  }

  render() {
    const { repo } = this.props;
    const { pulls } = this.state;
    return (
      <Segment color="green">
        <h2>{repo.name}</h2>
        <div>{OPEN_PRS} : {pulls.length}</div>
      </Segment>
    )
  }
}
