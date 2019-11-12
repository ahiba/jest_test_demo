import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../index'
import store from '../../../../store/createStore'
import axios from '../../__mocks__/axios'

beforeEach(() => {
  jest.useFakeTimers()
  axios.success = true
})


it(`
  1.输入框输入内容
  2.点击回车
  3.列表中展示用户输入的内容项
`, () => {
  const wrapper = mount(<Provider store={store}><TodoList /></Provider>)
  const inputElem = findTestWrapper(wrapper, 'header-input')
  const content = 'dell lee'
  inputElem.simulate('change', {
    target: {
      value: content
    }
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  })
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(listItems.length).toEqual(1)
  expect(listItems.text()).toContain(content)
  console.log(listItems)
  console.log(wrapper)
})

it(`
  1.用户打开页面,请求正常
  2.应该展示接口返回的数据
`, (done) => {
  const wrapper = mount(<Provider store={store}><TodoList /></Provider>)

  jest.runAllTimers()
  expect(setTimeout).toHaveBeenCalledTimes(1)
  process.nextTick(() => {
    wrapper.update()
    console.log(wrapper.debug())
    const listItem = findTestWrapper(wrapper, 'list-item')
    expect(listItem.length).toBe(1)
    done();
  })
  // done()
  // setTimeout(() => {
  //   wrapper.update()
  //   console.log(wrapper.debug())
  //   const listItem = findTestWrapper(wrapper, 'list-item')
  //   expect(listItem.length).toBe(1)
  //   done();
  // }, 0);

})

it(`
  1.用户打开页面,请求异常
  2.页面无列表内容，应该能把页面展示出来
`, (done) => {
  axios.success = false
  const wrapper = mount(<Provider store={store}><TodoList /></Provider>)

  jest.runAllTimers()
  // expect(setTimeout).toHaveBeenCalledTimes(1)
  process.nextTick(() => {
    wrapper.update()
    console.log(wrapper.debug())
    const listItem = findTestWrapper(wrapper, 'list-item')
    expect(listItem.length).toBe(0)
    done();
  })
  // done()
  // setTimeout(() => {
  //   wrapper.update()
  //   console.log(wrapper.debug())
  //   const listItem = findTestWrapper(wrapper, 'list-item')
  //   expect(listItem.length).toBe(1)
  //   done();
  // }, 0);

})
