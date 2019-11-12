import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import App from './App';
import TodoList from '../../index'

// Enzyme.configure({ adapter: new Adapter() });
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

it('TodoList 应该给 未完成列表传递list数据 以及deleteItem 方法', () => {
  const wrapper = shallow(<TodoList />)
  const UndoList = wrapper.find('UndoList')
  expect(UndoList.prop('list')).toBeTruthy()
  expect(UndoList.prop('deleteItem')).toBe(wrapper.instance().deleteItem)
  // expect(wrapper.state('undoList')).toBe(wrapper.instance().addUndoItem)
  
});

it('当 deleteItem方法被执行时候 undoList应该删除内容', () => {
  const wrapper = shallow(<TodoList />)
  wrapper.setState({
    undoList: ['学习jest', 'dell', 'lee']
  })
  wrapper.instance().deleteItem(1);
  expect(wrapper.state('undoList')).toEqual(['学习jest','lee'])
  // const Header = wrapper.find('Header')
  // const addFunc = Header.prop('addUndoItem');
  // addFunc('学习react')

  // expect(wrapper.state('undoList').length).toBe(1)
  // expect(wrapper.state('undoList')[0]).toBe('学习react')
  // expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
  // expect(wrapper.state('undoList')).toBe(wrapper.instance().addUndoItem)
  
});

