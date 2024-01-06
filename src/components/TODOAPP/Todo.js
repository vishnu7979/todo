import React, { useEffect, useState } from 'react';
import "./Todo.css"
import AddTask from './AddTask';
import ListingOfTask from './ListingOfTask';

 
const Todo = () => {

  const [tasks,setTasks]=useState([]);
  useEffect(()=>{
    document.title=`you have ${tasks.length} pending task(s)`
  })


  const addTask=(title)=>{
    const newTask=[...tasks,{title}]
    setTasks(newTask);
  };

  const removeTask=(index)=>{
    const newTask=[...tasks]
    newTask.splice(index,1);
    setTasks(newTask)
  }

  return (
    <>
    <div className='todoContainer'>
         <div className='header'>TODO APP</div>
         <div className='addtask'>
          <AddTask addTask={addTask}/>
         </div> 
         <div className='tasks'>
          {tasks.map((task,index)=>(
            <ListingOfTask task={task} removeTask={removeTask} index={index}  key={index}/>
          ))}
          </div>
    </div>
    </>
  )
} 

export default Todo

