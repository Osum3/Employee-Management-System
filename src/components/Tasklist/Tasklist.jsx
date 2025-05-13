import {React, useContext} from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './Newtask';
import FailedTask from './FailedTask';
import CompTask from './CompleteTask';


const TaskList=({data})=>
    {
        return (
                <div id="taskno" className=" overflow-x-auto flex items-center flex-nowrap w-full justify-start gap-5 h-80 mt-5 border-2 p-2">
                 {
                    data.tasks.map((elem,idx)=>{
                        if(elem.active){
                            return <AcceptTask key={idx} data={elem}/>
                        }
                         if(elem.NewTask){
                            return <NewTask key={idx} data={elem}/>
                        }
                         if(elem.completed){
                            return <CompTask key={idx} data={elem}/>
                        }
                         if(elem.failed){
                            return <FailedTask key={idx} data={elem}/>
                        }
                    })
                 }
                    
                 

                </div>
        )
    }     
export default TaskList;