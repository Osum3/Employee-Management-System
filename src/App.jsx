import {React, useEffect, useState} from 'react'
import "./App.css"
import "./index.css"
// import {React} from react
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import Header from "./components/other/Header"
import TaskList from './components/other/AllTask'
import TaskListdes from './components/Tasklist/TaskList'
import { setlocal } from './utils/localstage'
import { useContext } from 'react'
import { AuthContext } from './context/Authprovider'


const App=()=>
{
  useEffect(()=>{setlocal()},[])
  const[user,setuser]=useState(null)
  const[loginUser,setloginUser]=useState(null)

  const [userdata,setuserdata]=useContext(AuthContext);


useEffect(()=>{
  const loginuser=localStorage.getItem('loggedinuser')
  if(loginuser){
    const userd=JSON.parse(loginuser);
  console.log("here");
  
   setuser(userd.role)
      setloginUser(userd.data)
  }
  },[]
);

  const handleLogin=(em,ps)=>{
       if(userdata){

         // const matchedadmin = data.admin.find((e) => em === e.email && ps === e.password);
         if(em=='admin@e.com'&& ps=='111' ){
           setuser('admin')
           localStorage.setItem('loggedinuser', JSON.stringify({ role: 'admin' }))
          }
          const matchedEmployee = userdata.find((e) => em === e.email && ps === e.password);
          
             if (matchedEmployee) {
              localStorage.setItem('loggedinuser', JSON.stringify({ role: 'employee' ,data:matchedEmployee}));
              setuser('employee');
              setloginUser(matchedEmployee);
            
            }

          

          else{
           alert('not working')
          }
          // console.log(setloginUser)
      }
      else{   
        alert('Invalid credentials')
      }
  }


  return(
    <>
    
   {!(user)  ? <Login handleLogin={handleLogin} />: '' }
   {/* console.log(user) */}

   {user=="admin" ? <AdminDashboard changeUser={setuser}/> : (user=='employee'?<EmployeeDashboard  changeUser={setuser} data={loginUser}/> : null) }  
   {/* // passing the data of employee */}

    </>
   
   
 
    
  )
}
export default App;