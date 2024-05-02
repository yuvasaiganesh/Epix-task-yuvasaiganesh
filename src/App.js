// App.js
import './App.css';

import TaskListInterface from "./components/TaskListInterface";
import TaskAssignment from "./components/TaskAssignment";
import TaskStatusUpdates from "./components/TaskStatusUpdates";
import TaskSummaryPage from "./components/TaskSummaryPage";


const App = () => {
  return (
    <div className="app-container ">
      <TaskListInterface />
      <TaskAssignment />
      <TaskStatusUpdates/>
      <TaskSummaryPage/>
      </div>
  );
};

export default App;