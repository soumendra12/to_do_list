import { useState } from "react";


const Task = ({ task }) => {
  const [status,setStatus]=useState(task.status);
    return (
        <>
        {
            task.status === "pending" ? <div className="row">
                <div className="col-1">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=>{
                            task.status="completed"
                            setStatus("completed");
                        }}/>
                    </div>
                </div>
                <div className="col-8">
                {task.text},{task.status}
                </div>

                </div>
            :   <div className="row">
                    <div className="col-1">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=>{
                                task.status="pending"
                            setStatus("pending");
                        }}/>
                        </div>
                    </div>
                    <div className="col-8">
                        <del>{task.text}</del>,{task.status}
                    </div>

                </div>
        }
        </>
    );
}
export default Task;