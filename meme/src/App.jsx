import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Meme from './components/Meme'
function App() {

  return (
    <div>
      <NavBar/>
      <Meme/>
      </div>
  )
}

export default App
