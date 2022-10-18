import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';







const Menu = () => (
    <>
            <p>
            <a href='#home'> Home</a>
            </p>
            <p>
            <a href='#myskills'> my skills</a>
            </p>
            <p>
            <a href='#Services'> my Services</a>
            </p>
            <p>
            <a href='#connect'>Concetion</a>
            </p>
            <p>
            <a href='#Blog'> Blog</a>
            </p>
    </>
)


const Navbar = () => {
const [ toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <h1 className='gradient__text'>mp</h1>
                    <p className='gradient__text'>mohamed pegasus</p>
                </div>
                <div className='gpt3__navbar-links_container'>
                <Menu />
                </div>
            </div>
                
            <div className='gpt3__navbar-menu'>
                    {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links'>
                                    <Menu />
                            </div>
                        </div>
                    )}    
                </div>
            
        </div>
    )
}


export default Navbar;