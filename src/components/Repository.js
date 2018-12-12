import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const Repository = ({ repo }) => {
  return (
    <Segment>
        <h4>{repo.name}</h4>
    </Segment>
  )
}

export default Repository;
