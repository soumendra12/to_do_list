import Task from "./Task";



const Tasklist =({setTaskList,taskList})=>{
    
    return(
        <div className="mt-5" style={{marginBottom:"100px"}}>
            {taskList.map(task=><Task key={task.id} taskList={taskList} task={task} setTaskList={setTaskList}/>)}
        {/* {taskList.map(task=><h1 key={task.text} >{task.text}</h1>)} */}
        </div>
    );
}
export default Tasklist;