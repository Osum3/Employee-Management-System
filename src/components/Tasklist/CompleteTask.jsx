import React from 'react'
const CompTask=({data})=>{
        return (
            <div className="flex-shrink-0 h-full  w-[300px] border-2 bg-brown-300 rounded-xl overflow-clip">
                        <div className="flex p-2 items-center justify-between">
                            <h3 className="bg-red-700 text-xl rounded px-3 py-1">{data.category}</h3>
                            <h4 className="bg-red-600 text-xl rounded px-3 py-1">{data.taskDate}</h4>
                        </div>
                        <h2 className="m-2 font-semibold text-xl text-black">
                       {data.taskTitle}
                        </h2>
                        <p className="m-2 ">
                          {data.taskDescription}
                        </p>
                        <button className='border-1px'>Mark </button>
                        <button className='border-1px'>Mark as Failed</button>
            </div>
        )
}
export default CompTask;