import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const User = ({ user }) => {
  return (
      <div>
        <Header as='h3' style={{ fontSize: '2em' }}>
            {user.login}
        </Header>
        <Image src={user.avatar_url} avatar />
      </div>
  )
}

export default User;
