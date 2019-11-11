import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });
// import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // const container = div.getElementsByClassName('App')
  // console.log(container)
  // expect(container.length).toBe(1)
  const wrapper = shallow(<App />)
  console.log(wrapper.debug())
  expect(wrapper.find('.App').length).toBe(1);
  expect(wrapper.find('.App')).toExist();
 
});
