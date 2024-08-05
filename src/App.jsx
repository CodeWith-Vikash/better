import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Start from './components/Start/Start'
import Calculator from './components/Calculator/Calculator'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/start' element={<Start/>}/>
        <Route path='/calc' element={<Calculator/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App