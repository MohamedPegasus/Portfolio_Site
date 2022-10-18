import React from 'react';
import './Footer.css';
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'> mohamed pegasus</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p className='gradient__text'> Put your goal at the stars, because if you fall, you will fall on the moon</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <h1 className='gradient__text'>mp</h1>
        </div>
        <div className='gpt3__footer-links-div'>
            <h4>links</h4>
          <a href='https://github.com/MohamedPegasus'>
                  <AiFillGithub size='50px'/>
                  <p>Github </p>
                </a>
          <a href='https://github.com/MohamedPegasus'>
                  <AiFillLinkedin size='50px'/>
                  <p>Linkedin</p>
                </a>
          <a href='https://github.com/MohamedPegasus'>
                  <AiFillYoutube size='50px'/>
                  <p>Youtube</p>
                </a>
          </div>
            
        
      </div>
      
    </div>
  )
}

export default Footer