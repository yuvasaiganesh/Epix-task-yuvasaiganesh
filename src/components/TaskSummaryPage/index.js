import React, { useContext,useState,useEffect } from "react";
import { ContextTaskdata } from "../Context";

const TaskSummary = () => {
  const {data, assigneddata, dataStatus } = useContext(ContextTaskdata)
  
  const [taskList,settaskList]= useState([])

  const updatecounts=()=>{
    const newList=data.map(each=>{
      const filteredassignedtask=assigneddata.filter(item=>item.id===each.id)
      const filteredtaskStatus=dataStatus.filter(item=>item.id===each.id)
      
      const assignedtask=filteredassignedtask.length>0 ? filteredassignedtask[0].assignedTo : "-"
      const statustask=filteredtaskStatus.length>0 ? filteredtaskStatus[0].status : "-"
      return {id:each.id, name:each.name, assigned:assignedtask, status:statustask}
    
    }
    
    )
    settaskList(newList)
  }

  useEffect(()=>{
    updatecounts()
  },[data, assigneddata, dataStatus])

  return (
    <div className="section">
      <h2>Task Summary</h2>
      <p>Total Tasks: <span>{data.length}</span></p>
      <h3>Tasks Assigned to Users/Teams:<span>{assigneddata.length}</span></h3>
      <table>
      <thead>
        <tr>
          <th>Task name</th>
          <th>Task Assigned to</th>
          <th>Task Status</th>
          </tr>
        </thead>
        <tbody>
      {taskList.map(each=>(
        
          <tr  key={each.id}>
          <td>{each.name}</td>
          <td>{each.assigned}</td>
          <td>{each.status}</td>
          </tr>
         
      ))
      

      }
      </tbody>
      </table>

    </div>
  );
};

export default TaskSummary;