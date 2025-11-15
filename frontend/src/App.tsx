import React from 'react'
import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Store from './pages/Store'
import Login from './connect/Login'
import SignUp from './connect/SignUp'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/store' element={<Store/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}
