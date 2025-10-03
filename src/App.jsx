import React from 'react'
import Index from './pages/Index'
import { Route, Routes } from 'react-router'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Interests from './pages/Interests'
import Settings from './pages/Settings'

const App = () => {
  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
    </>
  )
}

export default App