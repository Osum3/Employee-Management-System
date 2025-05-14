import React from "react"
import { setlocal } from "../../utils/localstage"

const Header =(props)=>{
    
    const logout=()=>{
        console.log("logout")
        localStorage.setItem('loggedinuser','');
            props.changeUser('')
    }
    return (
        <div className="flex items-end justify-between m-5 border-3 p-5">
            <h1 className="text-3xl font-medium "> Helloo!!!  <br/> username</h1>
            <button  onClick={logout}className="bg-red-500 text-white p-2" >Log Out</button>

        </div>
    )
}
export default Header