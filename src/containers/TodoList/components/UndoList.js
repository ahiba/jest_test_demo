import React, { Component } from 'react'
// addUndoItem
export default class UndoList extends Component {

  render() {
    const { list, deleteItem, changeStatus, handleBlur, valueChange } = this.props
    return (
      <div className="undo-list">
        <div className="undo-list-title">
          正在进行
          <div data-test="count" className="undo-list-count">{list.length}</div>
        </div>
        
        <ul className="undo-list-content">
          {
            list.map((item, index) => (
              <li 
                onClick={() => {
                  changeStatus(index)
                }}
              className="undo-list-item" data-test="list-item" key={`${item.value}-${index}`}>
                {
                  item.status === 'div' ? item.value : (
                    <input data-test="input" value={item.value} 
                      onBlur={() => handleBlur(index)}
                      onChange={(e) => valueChange(index, e.target.value)}
                    />
                  )
                }
                <span className="undo-list-delete" data-test="delete-item" onClick={(e) => {
                  e && e.stopPropagation()
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