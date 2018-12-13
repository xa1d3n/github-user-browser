import React from 'react';
import ReactDOM from 'react-dom';
import User from '../components/User';

const userProps = {
    login: 'test',
    avatar_url: 'test.jpg'
  }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User user={userProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
