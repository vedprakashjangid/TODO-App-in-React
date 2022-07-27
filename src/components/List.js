import React from 'react'

const List = ({ items, editItem, removeItem }) => {
    return (<div className="taskEditDeleteContainer">
        <div className="task" key={id}>
            {title}
        </div>
        <button onClick={()=>editItem(id)}>Edit</button>
        <button onClick={()=>removeItem(id)}>Delete</button>
    </div>)
}
export default List