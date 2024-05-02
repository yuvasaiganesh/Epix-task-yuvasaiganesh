import { useState } from "react"
import React  from "react"



export const ContextTaskdata = React.createContext();

export const UserTasksProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [assigneddata, setassigneddata] = useState([]);
  const [dataStatus, setdataStatus] = useState([]);

  const updateTasks = (updatedata) => {
    setData(updatedata);
  };

  const updateAssignData = (updatedata) => {
    setassigneddata(updatedata);
  };

  const updatestatusData = (updatedata) => {
    setdataStatus(updatedata);
  };
  return (
    <ContextTaskdata.Provider value={{ data, updateTasks, assigneddata, updateAssignData ,dataStatus, updatestatusData}}>
      {children}
    </ContextTaskdata.Provider>
  );
};
