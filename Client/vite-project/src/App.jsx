
import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Adopt from './Components/Adopt.jsx'
import Adoptform from './Components/Adoptform.jsx'
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Manual from './Components/Manual.jsx'
import Footer from './Components/Footer.jsx'
import feedback from './Components/feedback.jsx'
function App() {
  return (
    <>
       <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/manual" element={<Manual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adoptform" element={<Adoptform />} />
        <Route path="/feedback" element={<feedback />} />
      </Routes>
     
    </BrowserRouter> 
      <Footer/>
    
   


    </>
  )
}



export default App;
