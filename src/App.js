import React, { useState,useEffect } from 'react'
import "./App.css"

const getLocalItem=()=>{
 let list = localStorage.getItem("localtask");
 if(list){
  return JSON.parse(list);
 }
 else{
  return [];
 }
}


export default function App() {
  const [text, setText] = useState("");
  const [button,setButton] = useState("ADD");

  const [task, setTask] = useState(getLocalItem);

  useEffect( ()=>{
    localStorage.setItem("localtask",JSON.stringify(task));
   },[task])
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, text]);
    setText("");

  }

  const changeText = (e) => {
    setText(e.target.value);
  }
  const editTask = (taskIndex) => {
setButton("Save");
   };
  const deleteTask = (passedIndex) => {
    const finalData = task.filter((currentElement, index) => {
      return index !== passedIndex;
    })
    setTask(finalData);
  };


  return (
    <div className="container">
      <h2>To Do List With Localstorage</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="formContainer">

          <input type="text" placeholder='Enter Task...'
            onChange={changeText}
            value={text} />
          <button type='submit' disabled={!text}>
            ADD 
          </button>
        </div>
      </form>

      <div className="taskContainer">
        {task.map((value, index) => {
          return (
            <div className="taskEditDeleteContainer">
              <div className="task">
                {value}
              </div>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          )
        })}
      </div>

      {/* <div className="taskEditDeleteContainer">
          <div className="task">
            hi to do 
          </div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className="taskEditDeleteContainer">
          <div className="task">
            hi to do 
          </div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      */}

    </div>


  )
}
