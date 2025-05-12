import React from "react"
import Header from "../other/Header";
import Createtask from "../other/CreateTask";
import ListofTasks from "./ListofTasks";
// src\components\Dashboard\AdminDashboard

const AdminDashboard=(props)=>{
    // console.log(props)
    const {firstName}="Admin";

    return (
        <div className='h-screen w-full p-5 '>

        <Header changeUser={props.changeUser}/>
        <Createtask />
        <ListofTasks/>

    </div>
    )
}
export default AdminDashboard;