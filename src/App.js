import { useState } from 'react';
import './App.css';

function App() {

  const [todoList,setTodoList] = useState([]);
  const [newTask,setnewTask] = useState("");
  //const [taskID,settaskID] = useState(0);

  const handleChange = (event)=>{
    setnewTask(event.target.value);
  };

  const addTask =() =>{
    /*
      Here we are setting the todolist using the current elements in the list and adding new task
      to get all the task from the list we use spread operator

    */
   const task ={
    id:todoList.length===0 ? 1 : todoList[todoList.length - 1].id + 1,  // check condition
    taskName : newTask
   }                                  // here we are adding w.r.t object, we create and object(taskID and taskName)
    setTodoList([...todoList,task]); // add new task to the todolist (variable : todoList)
    console.log("New Task Added in the List")
  };

  const deleteTask=(id)=>{
    /* Using this function we remove a task for the list
      We map through each task and see if current task is matching with the deleted task
      then we see the new list as the newToDoList by using the Hooks
    */

    setTodoList(todoList.filter((task)=> task.id!==id));  // set the new list here
    console.log("Task Deleted")
  };

  return (
    <div className="App">

      <div className="addTask">
        <input style={{ fontWeight: 'bold' }} onChange={handleChange}/>  { /*this will hold the data in newTask by using useState Hook*/}
        <button onClick={addTask} className="addTaskButton" style={{ backgroundColor: 'Navy', color: 'white', borderRadius: '5px', padding: '10px' }}>Add Task</button>
      </div>

      <div className="list">   { /*this will display the tasks*/}
        {todoList.map((task)=>{  
          return ( <div><h1 style={{display:"inline-block",backgroundColor:"green",borderRadius:"10px"}}>{task.taskName} <button style={{fontWeight:"bold",color:"red",borderRadius: '5px',padding: '5px',marginTop:'-50px'}} onClick={()=> deleteTask(task.id)}>X</button></h1></div>)
        })}
      </div>
    </div>
  );
}

export default App;
