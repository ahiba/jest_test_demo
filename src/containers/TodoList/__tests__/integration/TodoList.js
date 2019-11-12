import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../index'
import store from '../../../../store/createStore'


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
