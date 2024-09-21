import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import  {Homepage}  from './pages/index.pages.js'
import {Navbar} from './components/index.components.js'
import Loginpage from './pages/Loginpage.jsx'


//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>

        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/profile' element={ <p>Productos</p>}/>
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
