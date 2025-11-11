import React from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Card from './components/Card'
import Last from './components/Last'
import Login from './connect/Login'
import SignUp from './connect/SignUp'
import CreateStore from './connect/CreateStore'

import Items from './ItemsComp/Items'
export default function App() {
  return (
    <div >
      {/* header sebet 3a first group wel teni  */}
      <Header ></Header>

      {/* awl group landing page ma3 example 3an chou 3ena items */}
      <LandingPage/>
      <Card/>
      <Last></Last>

      {/* fiha header ma3 filters w items */}
      <Items/>

      {/*ya3ml l user connect plus n5li y2dr ya3ml store */}
      <Login/>
      <SignUp/>
      <CreateStore/>
    </div>
  )
}
