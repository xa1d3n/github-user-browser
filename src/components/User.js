import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

const User = ({ user }) => {
  return (
      <div>
        <h4>{user.login}</h4>
        <Image src={user.avatar_url} size='small' />
        </div>
  )
}

export default User;
