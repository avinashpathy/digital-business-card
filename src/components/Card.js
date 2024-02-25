import React from 'react';
import Info from './Info';
import About from './About';
import Interest from './Interest';
function Card() {
  return (
    <div className='card'>
    <Info/>
    <About/>
    <Interest/>
    </div>
  )
}

export default Card