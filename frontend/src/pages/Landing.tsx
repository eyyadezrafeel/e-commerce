import React from 'react'
import LandingPage from '../components/LandingPage'
import Card from '../components/Card'
import Last from '../components/Last'

interface LandingProps {
  isDark: boolean;
}

export default function Landing({ isDark }: LandingProps) {
  return (
    <div>
            <LandingPage isDark={isDark} />
            <Card isDark={isDark} />
            <Last isDark={isDark} />
    </div>
  )
}
