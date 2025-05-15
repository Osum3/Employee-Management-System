import React from "react"
import AllTask from "../other/AllTask";
import Header from "../other/Header";
import TaskList from "../Tasklist/TaskList"

const  EmployeeDashboard=(props)=>{
    // console.log(props);
    const n="ayush";
    // const { firstName } = data.data;
    return(
       <div>
        <Header changeUser={props.changeUser} data={n}/>
           <AllTask data={props.data}/>
           {/* <TaskList data={props.data}/> */}
           <TaskList data={props.data}/>
           
       </div> 
    )
  
}
export default EmployeeDashboard;