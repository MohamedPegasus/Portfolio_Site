import React from 'react';
import './Connect.css';
import { Button } from 'react-bootstrap';

const Brand = () => {
  return (
    <div className='form' id='connect'>
        
        
        <form>
          <h1 className='gradient__text'>Concetion</h1>
          <label> Your Name</label>
          <input type='text'></input>
          <label>Email</label>
          <input type='email'></input>
          <label> Subject</label>
         <input type='text'></input>
         <label>Details</label>
         <textarea rows='6' placeholder='type a short massage here'></textarea> 
          <br/>
          <Button variant="outline-success" type='submit' value='send'>submit</Button>
        </form>
    </div>
  )
}

export default Brand;