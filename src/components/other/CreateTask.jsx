
import React,{useContext, useState} from 'react'
import { AuthContext } from '../../context/Authprovider';



const Createtask=()=>{
    const[taskTitle,setTaskTitle]=useState('');
    const[taskDes,setTaskDes]=useState('');
    const[taskDate,setTaskDate]=useState('');
    const[assignto,setAssignto]=useState('');
    const[category,setCategory]=useState('');
    const [userdata,setuserdata]=useContext(AuthContext);
    

    
const [task,setTask]=useState({});
    const submitHandler =(e)=>{

            e.preventDefault();
    const newTask = {
                    taskTitle,
                    taskDes,
                    taskDate,
                    category,
                    assignto,
                    active: false,
                    newTask: false,
                    failed: true,
                    completed: false
                    };

setTask(newTask);
const data = userdata

        data.forEach(function (elem) {
            if (assignto == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setuserdata(data)
        console.log(data);

// console.log(newTask); 


            setTaskTitle('')
            setTaskDes('')
            setTaskDate('')
            setAssignto('')
            setCategory('')
    }

return (
<div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e);

            }} 
            className="flex flex-wrap w-full items-start justify-between">
               

                <div className='w-1/2'>

                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>

                        <input 
                    value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        type="text" className='text-sm px-2 py-1 w-4/5 rounded ouline-none bg-transparent border-[1px] border-gray-400' placeholder="Make a ui design"></input>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input 
                    value={taskDate}

                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm px-2 py-1 w-4/5 rounded ouline-none bg-transparent border-[1px] border-gray-400' type="date"/>
                    </div>
                    <div>                    
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
                        <input
                    value={assignto}

                         onChange={(e)=>{
                            setAssignto(e.target.value)
                        }}
                        className='text-sm px-2 py-1 w-4/5 rounded ouline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder="name"></input>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input 
                    value={category}

                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='text-sm px-2 py-1 w-4/5 rounded ouline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder="design , dev, etc"></input>
                    </div>
                        
                </div>

                <div className="w-2/5 flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description </h3>
                    <textarea 
                    value={taskDes}
                    onChange={(e)=>{
                            setTaskDes(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'> Create Task</button>
                </div>

            </form>
        </div>
)
}
export default Createtask;