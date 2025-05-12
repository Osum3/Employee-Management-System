import {React} from 'react'

const AllTask=({data})=>
    {
        console.log("takslist")
        console.log(data);
        // console.log(data.data.taskCounts.newTask);
      return(
       <div className="flex mt-10 justify-between gap-5 scteen">
            <div className="rounded-xl w-[45%] py-6 px-10   bg-blue-500">
                <h2 className="text-3xl font-semibold ">{data.taskCounts.newTask}</h2>
                <h2 className="text-xl font-medium ">NewTask</h2>

            </div>
            <div className="rounded-xl w-[45%] py-6 px-10  bg-green-500 ">
                <h2 className="text-3xl font-semibold ">{data.taskCounts.completed}</h2>
                <h2 className="text-xl font-medium ">Completed task</h2>

            </div>
            <div className="rounded-xl w-[45%] py-6 px-10  bg-yellow-500 ">
                <h2 className="text-3xl font-semibold ">{data.taskCounts.active}</h2>
                <h2 className="text-xl font-medium ">AcceptedTask</h2>

            </div>
            <div className="rounded-xl w-[45%] py-6 px-10  bg-red-500">
                <h2 className="text-3xl font-semibold ">{data.taskCounts.failed}</h2>
                <h2 className="text-xl font-medium ">FailedTask</h2>

            </div>
       </div>
      )
    }
    export default AllTask;