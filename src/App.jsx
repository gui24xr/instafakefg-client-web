import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import  {Homepage, Registerpage}  from './pages/index.pages.js'
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
        <Route path='/register' element={<Registerpage/>}/>
        <Route path='/profile' element={ <p>Profile</p>}/>
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
