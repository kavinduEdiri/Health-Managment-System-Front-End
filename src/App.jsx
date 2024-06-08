import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Coverimage from './components/Coverimage'
import SocialMedia from './components/SocialMedia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      
    </>
  )
}

export default App
