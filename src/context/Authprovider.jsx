import React,{Children, createContext, useEffect, useState} from "react"
import { getlocal } from "../utils/localstage";
// import 

export const AuthContext=createContext();

const Authprovider=({children})=>{
   
    const[userdata,setuserdata]=useState(null)
    useEffect(()=>{
        const {employee,admin}=getlocal()
        // const {emp,ad}=getlocal()
        // console.log(employee,admin);
        setuserdata({employee,admin})

    },[])
;
// console.log(emp)
    return(  
        <div>
            <AuthContext.Provider value={userdata} >
                {children}
            </AuthContext.Provider>
            </div>
    )
}
export default Authprovider;