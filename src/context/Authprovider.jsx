import React,{Children, createContext, useEffect, useState} from "react"
import { getlocal, setlocal } from "../utils/localstage";


export const AuthContext=createContext();

const Authprovider=({children})=>{
//    localStorage.clear();
    const[userdata,setuserdata]=useState(null)
    useEffect(()=>{
        setlocal();
        const {employee}=getlocal()
   
        setuserdata(employee)

    },[])
;
// console.log(emp)
    return(  
        <div>
            <AuthContext.Provider value={[userdata,setuserdata]} >
                {children}
            </AuthContext.Provider>
            </div>
    )
}
export default Authprovider;