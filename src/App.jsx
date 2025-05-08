import {React, useEffect, useState} from 'react'
import "./App.css"
import "./index.css"
// import {React} from react
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import Header from "./components/other/Header"
import TaskList from './components/other/TaskList'
import TaskListdes from './components/Tasklist/Tasklist'
import { setlocal } from './utils/localstage'
import { useContext } from 'react'
import { AuthContext } from './context/Authprovider'


const App=()=>
{
  useEffect(()=>{setlocal()},[])
  const[user,setuser]=useState(null)

  const handleLogin=(e,p)=>{
      if(e=='ayu@123' && p=='123'){
        // alert("admin is here baby")
        setuser("user");
      }
      else{
        // alert('chal bhaag yha se')
      }
  }
  const data=useContext(AuthContext);
  console.log(data);
  // useEffect(()=>{
  //   setlocal();
  // })

  return(
    <>
   {!(user)  ? <Login handleLogin={handleLogin} />: '' }

   {user=="user" ? <AdminDashboard/> : <EmployeeDashboard/>}
   
   
    {/* <Header/> */}
    {/* <TaskList/> */}
    {/* <TaskListdes/> */}
    {/* <AdminDashboard/> */}
    {/* <EmployeeDashboard/> */}
    </>
  )
}
export default App;