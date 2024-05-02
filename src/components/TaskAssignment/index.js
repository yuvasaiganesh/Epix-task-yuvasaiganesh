import React, { useState, useContext, useEffect } from "react";
import { ContextTaskdata } from "../Context";

import "../styles.css"
import "./index.css"

const TaskAssignment = () => {
  const { data , assigneddata, updateAssignData} = useContext(ContextTaskdata);
  const [assignedTo, setAssignedTo] = useState("");
  const [selectedTaskName, setSelectedTaskName] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [assignedTask,setAssignedtask]=useState([])


  const handleAssignedToChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handleTaskSelection = (taskid) => {
    setSelectedTaskId(taskid);
    const filterdata=data.filter(each=>each.id===taskid)
    
    setSelectedTaskName(filterdata[0].name)
  };

  const handleAssignTask = () => {
    let isAdd=true
    const updatedAssign=assignedTask.map(each=>{
      if (each.id===selectedTaskId){
        each.assignedTo=assignedTo
        isAdd=false
         }
        return each})

     setAssignedtask(updatedAssign)

if (isAdd){
  setAssignedtask([
    ...assignedTask,
    { id:selectedTaskId, name: selectedTaskName, assignedTo: assignedTo},
  ]);
}

      
    

    
    

    setAssignedTo("")
    setSelectedTaskId("")
    
  };
  
  useEffect(()=>{
    
    
    updateAssignData(assignedTask)
    
  },[assignedTask])

  

  return (
    <div className="section">
      <h2>Task Assignment</h2>
      <select
        value={selectedTaskId}
        onChange={(e) => handleTaskSelection(e.target.value)}
      >
        <option value="">Select Task</option>
        {data.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>
      <select value={assignedTo} onChange={handleAssignedToChange}>
        <option value="">Select User or Team</option>
        <option value="User1">User1</option>
        <option value="User2">User2</option>
        <option value="Team1">Team1</option>
        <option value="Team2">Team2</option>
      </select>
      <button onClick={handleAssignTask}>Assign Task</button>
      {assigneddata.map(each=>
      (
      <li key={each.id}>
        <p>
          Task:<span>{each.name}</span>Assignedto: <span>{each.assignedTo}</span>
        </p>
        
        
        
       </li>))
      }
    </div>
  );
};

export default TaskAssignment;
