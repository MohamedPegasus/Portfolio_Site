import React,{useState} from 'react'
import './Features.css';
import img  from "./pictures/main.jpg";
import html from './pictures/html5.png'
import css from './pictures/css3.png'
import javascript from './pictures/javascript.png'
import react from './pictures/react.png'
import php from './pictures/php.png'
import laravel from './pictures/laravel.png'
import mysql from './pictures/my sql 128.png'
import LiveWire from './pictures/twitter.png'




const Possibility = () => {
  const [show, setShow] = useState(false);
  return (
    <div id='myskills' className='gpt3__possibility' >
      <h1 className='gradient__text'> my skills</h1>
            <div className='gpt3__possibility-container'>
              <div className='gpt3__possibility-image'>
                  <h2>what is my skills?</h2>
                  <div className='skill'>
                  <div>
                    <img src={html} /> 
                    <p>HTML</p>
                  </div>
                  <div>
                    <img src={css} /> 
                    <p>CSS</p>
                  </div>
                  <div>
                    <img src={javascript} />
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <img src={react} />
                    <p>React</p>
                  </div>
                  <div>
                    <img src={php} />
                    <p>PHP</p>
                  </div>
                  <div>
                    <img src={laravel} />
                    <p>Laravel</p>
                  </div>
                  <div>
                    <img src={mysql} />
                    <p>MySQL</p>
                  </div>
                  <div>
                    <img src={LiveWire} />
                    <p>LiveWire</p>
                  </div>
                  
                  </div>
                  </div>
                  
            </div>
            <div className='gpt3__possibility-range'>
            <div className='gpt3__possibility-range-skill'>
              <label>HTML</label>
                <input type="range" value="90" min="0" max="100" step="5"></input>
                <div className='value'>90%</div>
              </div>
            <div className='gpt3__possibility-range-skill'>
              <label>CSS</label>
                <input type="range" value="90" min="0" max="100" step="5"></input>
                <div className='value'>90%</div>
              </div>
            <div className='gpt3__possibility-range-skill'>
              <label>JavaScript</label>
                <input type="range" value="75" min="0" max="100" step="5"></input>
                <div className='value'>75%</div>
              </div>
            <div className='gpt3__possibility-range-skill'>
              <label>React</label>
                <input type="range" value="70" min="0" max="100" step="5"></input>
                <div className='value'>70%</div>
              </div>
            <div className='gpt3__possibility-range-skill'>
              <label>PHP</label>
                <input type="range" value="80" min="0" max="100" step="5"></input>
                <div className='value'>80%</div>
              </div>
            <div className='gpt3__possibility-range-skill'>
              <label>Laravel</label>
                <input type="range" value="78" min="0" max="100" step="5"></input>
                <div className='value'>78%</div>
              </div>
            <div className='gpt3__possibility-range-skill'>
              <label>MySQL</label>
                <input type="range" value="90" min="0" max="100" step="5"></input>
                <div className='value'>90%</div>
              </div>
            <div className='gpt3__possibility-range-skill'>
              <label>LiveWire</label>
                <input type="range" value="60" min="0" max="100" step="5"></input>
                <div className='value'>60%</div>
              </div>
            </div>
            
      </div>
    
    
  );
}


export default Possibility;