
import React from 'react'
// import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar.jsx'
// import Signup from './Components/Signup.jsx'
// import Login from './Components/Login.jsx'
// import Aboutsmain from './Page/Aboutsmain.jsx'
import Homemain from './Page/Homemain.jsx';


import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Adopt from './Components/Adopt.jsx'
import Adoptform from './Components/Adoptform.jsx'
import Navbar from './Components/Navbar.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Manual from './Components/Manual.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
     

     {/* <BrowserRouter> */}
      {/* <Navbar/> */}
      {/* { <Aboutsmain/> } */}
      <Homemain/>
       {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
       </Routes>
    </BrowserRouter> }  */}
   
  
       <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/manual" element={<Manual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/adoptform" element={<Adoptform />} />
      </Routes>
     
    </BrowserRouter> 
      <Footer/>
    
   


    </>
  )
}   

export default App;
