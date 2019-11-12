import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import App from './App';
import Header from '../../components/Header'
import expectExport from '_expect@24.9.0@expect';

Enzyme.configure({ adapter: new Adapter() });
// import ReactDOM from 'react-dom';

it('header 渲染样式正常', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
  // const inputElem = wrapper.find("[data-test='input']")
  // expect(inputElem.length).toBe(1)
  
});

it('header 组件包含一个input 框', () => {
  const wrapper = shallow(<Header />)
  const inputElem = wrapper.find("[data-test='input']")
  expect(inputElem.length).toBe(1)
  
});

it('header 组件 input框内容 初始化应该为空', () => {
  const wrapper = shallow(<Header />)
  const inputElem = wrapper.find("[data-test='input']")
  expect(inputElem.prop('value')).toEqual('')
  
});

it('header 组件 input框内容 当用户输入时跟随变化', () => {
  const wrapper = shallow(<Header />)
  const inputElem = wrapper.find("[data-test='input']")
  // expect(inputElem.prop('value')).toEqual('')
  const userInput = '今天要学习jest'
  inputElem.simulate('change', {
    target: {
      value: userInput
    }
  })
  expect(wrapper.state('value')).toEqual(userInput)
  const newInputElem = wrapper.find("[data-test='input']")
  expect(newInputElem.prop('value')).toBe(userInput)
});

it('header组件 input 框输入回车时,如果input 无内容， 无操作', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn}/>)
  const inputElem = wrapper.find("[data-test='input']")
  // const value = ''
  wrapper.setState({
    value: ''
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).not.toHaveBeenCalled()
})

it('header组件 input 框输入回车时,如果input 有内容， 有操作', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn}/>)
  const inputElem = wrapper.find("[data-test='input']")
  // const value = ''
  wrapper.setState({
    value: '学习测试'
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  expect(fn).toHaveBeenCalled()
  expect(fn).toHaveBeenLastCalledWith('学习测试')
})

it('header组件 input 框输入回车时,如果input 有内容， 最后应该清除掉', () => {
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn}/>)
  const inputElem = wrapper.find("[data-test='input']")
  // const value = ''
  wrapper.setState({
    value: '学习测试'
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  const newInputElem = wrapper.find("[data-test='input']")
  expect(newInputElem.prop('value')).toBe('')
  // expect(fn).toHaveBeenCalled()
  // expect(fn).toHaveBeenLastCalledWith('学习测试')
})