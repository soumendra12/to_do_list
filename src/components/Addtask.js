import { useState } from "react";



const Addtask = ({taskList,setTaskList}) => {
    const [text, setText] = useState("");
    const onChangeHandler=(e)=>{
     setText(e.target.value);
    //  console.log(text);
    }
    return (
        <div className="container input-group mb-5 mt-5 px-5" style={{position: "fixed",bottom: 0}} >
            <button className="btn btn-primary btn-outline-success" onClick={()=>{setTaskList([...taskList,{id:taskList.length,text:text,status:"pending",priority:0}]); setText("")}} style={{ color: "black" }} type="button" id="button-addon1" >Add Task</button>
            <input onChange={onChangeHandler} type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={text} />
        </div>
    );
}
export default Addtask;
// export {text};