import React from 'react'
import  { Routes, Route, Link, NavLink }from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
   <Routes>
   <Route path="/" element={ <Layout/> } >
   <Route index element={ <Home/> } />
   <Route path="about" element={ <About/> } />
   <Route path="contact" element={ <Contact/> } />
   <Route path="user/:id" element={<User />}/>
   </Route>
   </Routes>
  
    </>

)}

export default App