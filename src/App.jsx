import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Maincomponents/Header'
import Main from './Components/Maincomponents/Main'
import Footer from './Components/Maincomponents/Footer'
import Login from './Pages/Login'
import { useRoutes } from 'react-router-dom'

const routes = [
  {path:'/' , element:<h1>Landing Page</h1>},
  {path:'/Login' , element:<Login/>},
]

function App() {
  const router = useRoutes(routes)

  return (
    <>
    {/* <Header/>
    <Main/>
    <Footer/>
    <Login/> */}
    {router}

    </>
  )
}

export default App
