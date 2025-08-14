import React, { createContext, useEffect, useState } from 'react'
const AuthContext =createContext()

const Authprovider = (children) => {
    const[user,setuser] =useState()
    const[loggedUser,setLoggedUser] =useState()

    function login(email,password){
        console.Consolelog(email,password);
        if(user.email == email && user.password ==password){
            setLoggedUser({...loggedUser,...{name:user.name, email:user.email},});
return 'login success'
        }else{
            setLoggedUser(null)
            
        }
    }


    useEffect(()=>{
        const u =JSON.parse(localStorage.getItem("user"));
setuser({...user,...u});
    },[])
    console.log(loggedUser, "in authprovider")
  return (
    <AuthContext.Provider value={{login,loggedUser}}>
{children}
    </AuthContext.Provider>
  )
}

export default {Authprovider,AuthContext}