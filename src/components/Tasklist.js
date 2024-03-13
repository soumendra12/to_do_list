import Task from "./Task";



const Tasklist =({taskList})=>{
    
    return(
        <div className="mt-5">
            {taskList.map(task=><Task task={task}/>)}
        {/* {taskList.map(task=><h1 key={task.text} >{task.text}</h1>)} */}
        </div>
    );
}
export default Tasklist;