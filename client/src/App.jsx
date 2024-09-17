import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignOut from './Pages/SignOut'
import Profile from './Pages/Profile'


const App = () => {
  return (
<>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/sign-out' element={<SignOut/>}/>
  </Routes>
</BrowserRouter>
</>
   
  )
}

export default App