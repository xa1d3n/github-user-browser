import React from 'react';
import ReactDOM from 'react-dom';
import Repository from '../components/Repository';

const repoProps = {
    name: 'test',
    owner: {
        login: 'login test'
    }
  }

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Repository repo={repoProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
