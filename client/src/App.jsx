import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import SignUp from './Pages/SignUp'


const App = () => {
  return (
<>
<BrowserRouter>
<Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
  </Routes>
</BrowserRouter>
</>
   
  )
}

export default App