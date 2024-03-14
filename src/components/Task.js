import { useState } from "react";


const Task = ({ setTaskList, taskList, task }) => {
    const [status, setStatus] = useState(task.status);
    return (
        <>
            {
                status === "pending" ? <div className="row mt-2">
                    <div className="col-1" style={{   display: "flex", alignItems: "center",justifyContent: "center"}}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => {
                                task.status = "completed"
                                setStatus("completed");
                            }} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="card">
                            <div className="card-body">
                                {task.text},{task.status}
                            </div>
                        </div>
                    </div>
                    <div className="col-1" onClick={()=>setTaskList(taskList.filter((t)=>t.id!==task.id?true:false))} style={{   display: "flex", alignItems: "center",justifyContent: "center"}}>
                        <span className="material-symbols-outlined">
                            DELETE
                        </span>
                    </div>

                </div>
                    : <div className="row mt-2">
                        <div className="col-1" style={{   display: "flex", alignItems: "center",justifyContent: "center"}}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => {
                                    task.status = "pending"
                                    setStatus("pending");
                                }} />
                            </div>
                        </div>
                        <div className="col-10" >
                            <div className="card">
                                <div className="card-body">
                                    <del>{task.text}</del>,{task.status}
                                </div>
                            </div>

                        </div>
                        <div className="col-1" onClick={()=>setTaskList(taskList.filter((t)=>t.id!==task.id?true:false))} style={{   display: "flex", alignItems: "center",justifyContent: "center"}} >
                            <span className="material-symbols-outlined">
                                DELETE
                            </span>
                        </div>

                    </div>
            }
        </>
    );
}
export default Task;