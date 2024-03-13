
import { useState } from 'react';
import './App.css';
import Addtask from './components/Addtask';
import Header from './components/Header';
import Tasklist from './components/Tasklist';

function App() {
  const [taskList,setTaskList]=useState([{
    text:"hi there i am soumednra",
    status:"pending",
    priority:1
  }]);
// console.log(taskList)
  return (
    <div className='container'>
    <Header/>
    <Tasklist taskList={taskList}/>
    <Addtask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
