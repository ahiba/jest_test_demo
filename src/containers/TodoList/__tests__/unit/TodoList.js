import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import App from './App';
import TodoList from '../../index'

// Enzyme.configure({ adapter: new Adapter() });
// import ReactDOM from 'react-dom';

describe('TodoList 组件', () => {
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
    expect(wrapper.state('undoList')[0]).toEqual({
      status: 'div',
      value: '学习react'
    })
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
    const data = [
      {status: 'div',value: '学习jest'},
      {status: 'div',value: '学习tdd'},
      {status: 'div',value: '学习单元测试'},
    ]
    wrapper.setState({
      undoList: data
    })
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual([data[0], data[2]])
    
  });
  
  it('当 deleteItem方法被执行时候 undoList应该删除内容', () => {
    const wrapper = shallow(<TodoList />)
    const data = [
      {status: 'div',value: '学习jest'},
      {status: 'div',value: '学习tdd'},
      {status: 'div',value: '学习单元测试'},
    ]
    wrapper.setState({
      undoList: data
    })
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual([data[0], data[2]])
    
  });

  it('当 changeStatus 方法被调用 undoList数据项status被修改', () => {
    const wrapper = shallow(<TodoList />)
    const data = [
      {status: 'div',value: '学习jest'},
      {status: 'div',value: '学习tdd'},
      {status: 'div',value: '学习单元测试'},
    ]
    wrapper.setState({
      undoList: data
    })
    wrapper.instance().changeStatus(1);
    expect(wrapper.state('undoList')[1]).toEqual({
      ...data[1],
      status: 'input'
    })
    
  });

  
  it('当 handleBlur 方法被调用 undoList数据项status被修改', () => {
    const wrapper = shallow(<TodoList />)
    const data = [
      {status: 'input',value: '学习jest'},
      {status: 'div',value: '学习tdd'},
      {status: 'div',value: '学习单元测试'},
    ]
    wrapper.setState({
      undoList: data
    })
    wrapper.instance().handleBlur(0);
    expect(wrapper.state('undoList')[0]).toEqual({
      ...data[0],
      status: 'div'
    })
  })

  it('当 valueChange 方法被调用 undoList数据项value被修改', () => {
    const wrapper = shallow(<TodoList />)
    const data = [
      {status: 'input', value: '学习jest'},
    ]
    const value = 'dell lee'
    wrapper.setState({
      undoList: data
    })

    wrapper.instance().valueChange(0, value);
    expect(wrapper.state('undoList')[0]).toEqual({
      ...data[0],
      value
    })
    
  });
  
})

