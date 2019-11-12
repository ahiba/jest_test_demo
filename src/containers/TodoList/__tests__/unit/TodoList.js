import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import App from './App';
import TodoList from '../../index'

Enzyme.configure({ adapter: new Adapter() });
// import ReactDOM from 'react-dom';


it('TodoList 初始化列表为空', () => {
  const wrapper = shallow(<TodoList />)
  expect(wrapper.state('undoList')).toEqual([])
  
});

it('TodoList 应该给 Header传递一个增加 undoList内容的方法', () => {
  const wrapper = shallow(<TodoList />)
  const Header = wrapper.find('Header')
  expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
  // expect(wrapper.state('undoList')).toBe(wrapper.instance().addUndoItem)
  
});

it('当 header 回车时 undoList 应该新增内容', () => {
  const wrapper = shallow(<TodoList />)
  const Header = wrapper.find('Header')
  const addFunc = Header.prop('addUndoItem');
  addFunc('学习react')

  expect(wrapper.state('undoList').length).toBe(1)
  expect(wrapper.state('undoList')[0]).toBe('学习react')
  // expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
  // expect(wrapper.state('undoList')).toBe(wrapper.instance().addUndoItem)
  
});

