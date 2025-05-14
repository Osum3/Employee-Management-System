import React, { useContext, useEffect, useState } from "react";
import Authprovider, { AuthContext } from "../../context/Authprovider";

const ListofTasks=()=>{

    let [userdata,setuserdata]=useContext(AuthContext);  

    
    return (
        <div className="bg-black-200 p-5 rounded mt-5 h-60 ">
             <div className="bg-red-500 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="w-1/5 ">Employee</h2>
                    <h3 className="w-1/5 ">New Task</h3>
                    <h4 className="w-1/5 ">Active</h4>
                    <h4 className="w-1/5 ">Completed</h4>
                    <h4 className="w-1/5 ">Failed</h4>
                    
                    </div>

            <div className="h-[80%] overflow-auto">


        {         
            
            
            userdata.map(function(elem,idx){                
                return (
                    <div key={idx} className="  mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-500">
                    <h2 className="w-1/5">{elem.firstName}</h2>
                    <h3 className="w-1/5">{elem.taskCounts.newTask}</h3>
                    <h4 className="w-1/5">{elem.taskCounts.active}</h4>
                    <h4 className="w-1/5">{elem.taskCounts.completed}</h4>
                    <h4 className="w-1/5">{elem.taskCounts.failed}</h4>
                    
                    </div>
                    )                   
                })
            }
                
            </div>
            </div>
            )
            
            
            
        }

        
        export default ListofTasks;



 
