import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

const App = () => {
  //1. state -> Login Status
  const [isLoggedin, setIsLoggedin] = useState(false)
   //2. State -> user name
   const [username, setusername] = useState("supriya")
   //3. login function
   const login =()=>{
    setIsLoggedin(true);
   }

   //4. logout function
   const logout = ()=>{
    setIsLoggedin(false)
   }
  return (
    <>
    <Navbar
    isLoggedin = {isLoggedin}
    username = {username}
    onlogin = {login}
    onlogout = {logout}
    />

    <h2>{isLoggedin?`welcome ${username}`:"Please login"}</h2>

    
    </>
  )
}

export default App