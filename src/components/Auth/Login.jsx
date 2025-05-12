import React, { useState } from "react";

const Login=({handleLogin})=>{
    // console.log(props)
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")


    const submitHandler=(e)=>{ // two way binding This is how you do two-way binding in React — it      eeps        the input field value in sync with React state.
       e.preventDefault()
        // console.log("Form Submitted");
        handleLogin(email,pass)
        setEmail("")
        setPass("")

    }
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
                <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center '>
                
                <input 
                value={email}
                onChange={(e)=>{
                   setEmail(e.target.value)
                //    console.log(email);
                }}
                required className='border-2 border-emerald-600 rounded-full px-4 py-2 m-2 text-xl' 
                type="email" placeholder="Enter the Email"/> 


                <input 
                value={pass}
                onChange={(e)=>{
                    setPass(e.target.value)
                //    console.log(pass);
 
                }}
                required className="border-2 border-emerald-600 rounded-full px-4 py-2 m-2 text-xl"
                type="Password" placeholder="Enter the Password"/> 


               <button className="bg-emerald-600 mt-7 border-2 px-28 py-3 rounded-full border-none">Login</button>

            </form>
            </div>
        </div>
    )
}
export default Login