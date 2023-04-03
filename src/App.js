import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Destination from './Destinations/Destination'
import Summer from './Summer/Summer'
import Gallery from './Gallery/Gallery'
import { Routes, Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Imgpage from './imgpage/Imgpage'
import Imgpage2 from './imgpage2/Imgpage2'
import Form from './form/Form'
import About from './about/About'


const App = () => {

  
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/imgpage' element={<Imgpage/>} />
      <Route path='/imgpage2' element={<Imgpage2/>} />
      <Route path='/form' element={<Form/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App