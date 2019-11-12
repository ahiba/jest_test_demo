import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import App from './App';
import UndoList from '../../components/UndoList'
import expectExport from '_expect@24.9.0@expect';
import { findTestWrapper } from '../../../../utils/testUtils'

// Enzyme.configure({ adapter: new Adapter() });
// import ReactDOM from 'react-dom';

// it('header 渲染样式正常', () => {
//   const wrapper = shallow(<Header />)
//   expect(wrapper).toMatchSnapshot()
//   // const inputElem = wrapper.find("[data-test='input']")
//   // expect(inputElem.length).toBe(1)
  
// });

it('未完成列表当数据未空数组时 count 数目为0 列表无内容', () => {
  const wrapper = shallow(<UndoList list={[]} />)
  const countElem = findTestWrapper(wrapper, "count")
  const listItems = findTestWrapper(wrapper, "list-item")
  expect(countElem.text()).toEqual("0")
  expect(listItems.length).toEqual(0)
  // const inputElem = wrapper.find("[data-test='input']")
  // expect(inputElem.length).toBe(1)
  
});

it('未完成列表当数据有内容时 count 数目显示数据长度 列表不为空', () => {
  const listData = ['学习jest', "学习tdd", '学习单元测试']
  const wrapper = shallow(<UndoList list={listData} />)
  const countElem = findTestWrapper(wrapper, "count")
  const listItems = findTestWrapper(wrapper, "list-item")
  expect(countElem.text()).toEqual("3")
  console.log('listItems.length', listItems.length)
  expect(listItems.length).toEqual(3)
 
  // const inputElem = wrapper.find("[data-test='input']")
  // expect(inputElem.length).toBe(1)
  
});

it('未完成列表当数据有内容时 要存在删除按钮', () => {
  const listData = ['学习jest', "学习tdd", '学习单元测试']
  const wrapper = shallow(<UndoList list={listData} />)
  const deleteItems = findTestWrapper(wrapper, "delete-item")
  expect(deleteItems.length).toEqual(3)
  // const inputElem = wrapper.find("[data-test='input']")
  // expect(inputElem.length).toBe(1)
  
});

it('未完成列表当数据有内容时 点击某个删除按钮 会调用删除方法', () => {
  const listData = ['学习jest', "学习tdd", '学习单元测试']
  const fn = jest.fn()
  const index = 1 
  const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />)
  const deleteItems = findTestWrapper(wrapper, "delete-item")
  deleteItems.at(index).simulate('click')
  expect(fn).toHaveBeenLastCalledWith(index)
  // const inputElem = wrapper.find("[data-test='input']")
  // expect(inputElem.length).toBe(1)
  
});
