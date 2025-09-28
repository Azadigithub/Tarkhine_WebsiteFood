import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Maincomponents/Header'
import Main from './Components/Maincomponents/Main'
import Footer from './Components/Maincomponents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    <Footer/>


    </>
  )
}

export default App
