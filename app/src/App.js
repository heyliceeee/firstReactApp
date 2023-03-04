import './App.css';
//import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import React, {useState} from 'react';



function App() {
  return (
    <>
      <Header/>
      {/*<Routes> */}
        {/* <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<Register/>}/> */}
      {/* </Routes> */}
      <Footer/>
    </>
  );
}

export default App;
