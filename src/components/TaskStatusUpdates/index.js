import React, { useState, useContext, useEffect } from "react";
import { ContextTaskdata } from "../Context";
import "../styles.css"

const TaskStatusUpdates = () => {
  const { data, dataStatus, updatestatusData} = useContext(ContextTaskdata);
  const [taskStatus, settaskStatus] = useState("");
  const [selectedTaskName, setSelectedTaskName] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [statusList,setstatusList]=useState([])


  const handleAssignedToChange = (e) => {
    settaskStatus(e.target.value);
  };

  const handleTaskSelection = (taskid) => {
    setSelectedTaskId(taskid);
    const name=data.filter(each=>each.id===taskid)
    
    setSelectedTaskName(name[0].name)
  };

  const handleAssignTask = () => {
    let isAdd=true
    const updatedStatus=statusList.map(each=>{
      if (each.id===selectedTaskId){
        each.status=taskStatus
        isAdd=false
         }
        return each})

        setstatusList(updatedStatus)

if (isAdd){
  setstatusList([
    ...statusList,
    { id:selectedTaskId, name: selectedTaskName, status: taskStatus},
  ]);
}


    
    settaskStatus("");
    setSelectedTaskId("")
    
  };
  
  useEffect(()=>{
    
    
   updatestatusData(statusList)
    
  },[statusList])


  return (
    <div className="section">
      <h2>Task Status</h2>
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
      <select value={taskStatus} onChange={handleAssignedToChange}>
      <option value="">select Status</option>
        <option value="Inprocess">Inprocess</option>
        <option value="completed">completed</option>
        <option value="NotCompleted">NotCompleted</option>
        
        
      </select>
      <button onClick={handleAssignTask}>Status Update</button>
      {dataStatus.map(each=>
      (
      <li key={each.id}>
        <p>
          Task:<span>{each.name}</span>status: <span>{each.status}</span>
        </p>
        
       </li>))
      }
    </div>
  );
};

export default TaskStatusUpdates;