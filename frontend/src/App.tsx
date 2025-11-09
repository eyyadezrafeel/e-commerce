import React from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Card from './components/Card'
import Last from './components/Last'
import Login from './connect/Login'
import SignUp from './connect/SignUp'

import Items from './ItemsComp/Items'
export default function App() {
  return (
    <div >
      <Header ></Header>
      <LandingPage/>
      <Card/>
      <Last></Last>
      <Items/>

      <Login/>
      <SignUp/>
    </div>
  )
}
