import React from 'react'
import './About.css'
import Destination from '../Destinations/Destination'
import '../Destinations/destination.css'
import Summer from '../Summer/Summer'

const About = () => {
  return (
    <section className='About' >

        <div className="backgroundabout">
            <span className='name' >ABOUT</span>
        </div>
        <Destination/>
        <div className="lines">Home to the Empire State Building, Times Square, Statue of Liberty and other iconic sites, New York City is a fast-paced, globally influential center of art, culture and fashion.</div>
        <Summer/>
    </section>
  )
}

export default About