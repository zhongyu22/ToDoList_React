import { createSemanticDiagnosticsBuilderProgram } from "typescript";
import "./App.css"
import { useState } from "react";
import { Task } from "./Task"

function App(){
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  }
 
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName : newTask,
      completed: false
    };
    setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter(t => t.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(todoList.map((t) => {
      if (t.id === id) {
        return {...t, completed: true}
      } else {
        return t;
      }
    }))
  } 

  return(
    <div className="App">
        <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>

      <div className="list">
        {todoList.map((t) => {
          return <Task 
          taskName={t.taskName} 
          id={t.id} 
          completed={t.completed} 
          deleteTask={deleteTask} 
          completeTask={completeTask}/>
        })}
      </div>
    </div>
  )    














  // const age = 9;

  // const isGreen = false;

  // const color = "blue";


  // return(
  //   <div className="App">
  //     {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
  //     <h1 className="name">Joey</h1>
  //     <h1 style = {{color : !isGreen ? "red" : "green"}}>This is my color</h1>
  //     {!isGreen && <button>This is a button</button>}
  //   </div>
  // )

  // const props = {
  //   name: 'eve',
  //   age: 24,
  //   gender: 'female'
  // }


  // const User = (props) => {
  //   return <div>
  //     <h1>{props.name} @</h1>
  //     <h1>{props.age} @</h1>
  //     <h1>{props.gender} @</h1>
  //   </div>
  // }

  // return (
  //   <div className="App">
  //     <User name='joey' age='24' gender="male"/>
  //     <User />
  //   </div>
  // )

}
  
  export default App