import React from 'react';
import './App.css';
import  Navbar  from './components/navbar/Navbar';
import   Header from './components/header/Header'
import   Footer from './components/footer/Footer'
import Features from "./components/features/Features";
import Concetion from "./components/connection/Connect.jsx";
import Services from "./components/services/Services";



const App = () =>  {
  return (
    
    <div className='App'>
                <div className="gradient__bg">
                  < Navbar/> 
                  < Header/>
                  < Features/>
                  <Services/>
                  < Concetion/>
                  <Footer />
                </div>
    </div>
  );
}

export default App;