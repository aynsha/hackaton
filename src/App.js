import React from 'react';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';
import  Navbar  from './Components/Navbar/Navbar';
import Cadeaux from './Pages/Cadeaux';
import Footer from './Components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/cadeaux' element={<Cadeaux />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
