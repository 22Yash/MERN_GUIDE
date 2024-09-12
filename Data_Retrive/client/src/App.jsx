import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './components/Data'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from './components/home'

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home/>}/>
          <Route path="/data" element={<Data/>}/>
          
        </Routes>
        
        
      </BrowserRouter>
    </>
  )
}

export default App
