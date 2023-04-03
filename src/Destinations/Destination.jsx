import React from 'react'
import './destination.css'
import { Destinations } from '../data/data'



const Destination = () => {

  

  return (
   
    <section className='destination'  >
     <h2 className='heading' >2016 TOP SUMMER DESTINATIONS NOW ON SALE</h2>
    <div className="inner">
      {Destinations.map(el =>
        <div key={el.id} className="box">
          <img src={el.url} alt="#" />
          <h4>{el.name}</h4>
          <p>{el.text}</p>
          <button className='btn' >{el.btn}</button>
        </div>        
        )}
    </div>
    </section>
  )
  
}

export default Destination