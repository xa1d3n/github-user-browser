import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import * as enzyme from "enzyme";
import User from '../components/User'
import Repository from '../components/Repository'
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render users component if theres users', () => {
  const usersState ={ 
    users: [{
      repos_url: 'test',
      id: 1
  }]}
  const wrapper = enzyme.shallow(<App />);
  expect(wrapper.find(User)).toHaveLength(0)
  // add a user
  wrapper.setState(usersState);
  expect(wrapper.find(User)).toHaveLength(1)
})

it('should render Repository component if theres repos', () => {
  const repoState ={ 
    repos: [{
      name: 'test',
      id: 1
  }]}
  const wrapper = enzyme.shallow(<App />);
  expect(wrapper.find(Repository)).toHaveLength(0)
  // add a repo
  wrapper.setState(repoState);
  expect(wrapper.find(Repository)).toHaveLength(1)
})
