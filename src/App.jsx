import { useState } from 'react'
import Home from './Pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/Signup.jsx'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
