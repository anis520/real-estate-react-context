import React from 'react';
// import routes and route
import{Routes ,Route}from 'react-router-dom'

// import conponents
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'


const App = () => {
  return(
   <div className='max-w-[1440px]  bg-white mx-auto' >
<Header/>

  <Routes>
     
     <Route    path='/' element={<Home/>}     />
     <Route    path='/property/:id' element={<PropertyDetails/>}     />


  </Routes>

<Footer/>


  </div>)
};

export default App;
