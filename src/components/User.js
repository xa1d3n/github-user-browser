import React from 'react'
import { Image } from 'semantic-ui-react'

const User = ({ user }) => {
  return (
      <div>
        <h2>{user.login}</h2>
        <Image src={user.avatar_url} avatar />
      </div>
  )
}

export default User;
