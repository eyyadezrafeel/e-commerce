import React from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Card from './components/Card'
import Last from './components/Last'
import Filter from './itemspage/Filter' 
export default function App() {
  return (
    <div >
      <Header ></Header>
      <LandingPage/>
      <Card/>
      <Last></Last>
      <Filter/>
    </div>
  )
}
