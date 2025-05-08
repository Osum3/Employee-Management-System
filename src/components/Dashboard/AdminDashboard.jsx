import React from "react"
import Header from "../other/Header";
import Createtask from "../other/CreateTask";

const AdminDashboard=()=>{
    return (
        <div className='h-screen w-full p-5 '>

        <Header/>
        <Createtask/>

    </div>
    )
}
export default AdminDashboard;