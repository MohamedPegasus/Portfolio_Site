import React from "react";
import  Navbar  from '../components/navbar/Navbar';
import   Header from '../components/header/Header'
import   Footer from '../components/footer/Footer'
import Features from "../components/features/Features";
import  Connect  from "../components/connection/Connect";




const Home = () => {
    return(
        <div className="gradient__bg">
        < Navbar />
        < Header />
        <Features />
        <Connect />
        <Footer />
        </div>
    )
}

export default Home;