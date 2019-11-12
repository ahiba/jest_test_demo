import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'
// addUndoItem
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this)
  }
  handleInputChange(e) {
    this.setState({
      value: e.target.value
    })
  } 
  handleInputKeyUp(e) {
    const { value } = this.props
    if(e.keyCode === 13 && value) {
      this.props.addUndoItem(value)
      this.props.handleInputChange('')
    }
  }
  render() {
    const { value, handleInputChange } = this.props
    return (
      <div className="header">
        <div className="header_content">
          TodoList
          <input 
            className="header_input"
            data-test="header-input" 
            value={value} 
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyUp={this.handleInputKeyUp}
            placeholder="todo"
          />
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    value: state.todo.inputValue
  }
}
const mapDispatch = dispactch => ({
  handleInputChange(value) {
    dispactch(actions.changeInputValue(value))
  }
})

export default connect(mapState, mapDispatch)(Header)