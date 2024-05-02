import { useState, useEffect ,useContext} from "react";
import {v4 as uuidv4} from 'uuid';
import { ContextTaskdata } from "../Context";
import "../styles.css"
import "./index.css"

const TaskList = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const data=useContext(ContextTaskdata)

  

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };


  const handleAddTask = () => {
    if (taskName.trim() !=="") {
      setTasks([
        ...tasks,
        { id:uuidv4(), name: taskName, assignedTo: null, status: "pending" },
      ]);
      
      setTaskName("");
      setTaskName("")
      
      
      
    }
    else{
        alert("please Enter valid task")
    }
  };

  useEffect(()=>{
    
    
    data.updateTasks(tasks)
    
  },[tasks])
  return (
    <div className="section">
      <h2>Task List</h2>
      <input type="text" value={taskName} onChange={handleTaskNameChange} placeholder="Add your Task" />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>Task Name:<span>{task.name}</span></p>
            
        
          
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;