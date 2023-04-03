import React from 'react'
import { Gallerydata } from '../data/data'
import './Gallery.css'
import { Link } from 'react-router-dom'



const Gallery = () => {

  return (

    <section className='Gallery' >

    <h2 className='heading' >2016 TOP SUMMER DESTINATIONS NOW ON SALE</h2>

    <div className="inner">
        {Gallerydata.map(el =>
            <div key={el.id} className="box">
                <img src={el.url} alt="" />
                <div className="content">
                    <Link to={'/imgpage'} >{el.name}</Link>
                    <span>{el.text}</span>
                </div>
            </div>
            )}
    </div>

    </section>

  )
}

export default Gallery