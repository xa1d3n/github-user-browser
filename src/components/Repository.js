import React, { PureComponent } from 'react'
import { Segment, Header } from 'semantic-ui-react'
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
        <Header as='h3' style={{ fontSize: '2em' }}>
          {repo.name}
        </Header>
        <div className="textWrap">{OPEN_PRS}: {pulls.length}</div>
      </Segment>
    )
  }
}
