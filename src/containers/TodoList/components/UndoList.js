import React, { Component } from 'react'
// addUndoItem
export default class UndoList extends Component {

  render() {
    const { list, deleteItem } = this.props
    return (
      <div className="undo-list">
        <div className="undo-list-title">
          正在进行
          <div data-test="count" className="undo-list-count">{list.length}</div>
        </div>
        
        <ul className="undo-list-content">
          {
            list.map((item, index) => (
              <li className="undo-list-item" data-test="list-item" key={`${item}-${index}`}>
                {item}
                <span className="undo-list-delete" data-test="delete-item" onClick={() => {
                  deleteItem(index)
                }}>-</span>
              </li>
            ))
          }
        </ul>
      </div>
    ) 
  }
}