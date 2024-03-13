import { useState } from "react";



const Addtask = ({taskList,setTaskList}) => {
    const [text, setText] = useState("");
    const onChangeHandler=(e)=>{
     setText(e.target.value);
    //  console.log(text);
    }
    return (
        <div className="container input-group mb-3 mt-5">
            <button className="btn btn-primary btn-outline-success" onClick={()=>{setTaskList([...taskList,{text:text,status:"pending",priority:0}])}} style={{ color: "black" }} type="button" id="button-addon1" >Add Task</button>
            <input onChange={onChangeHandler} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
    );
}
export default Addtask;
// export {text};