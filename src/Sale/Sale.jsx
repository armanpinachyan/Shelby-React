import React from 'react'
import saleimg from '../Shelbyimg/11.jpg'
import saleimg2 from '../Shelbyimg/22.jpg'
import './Sale.css'

const Sale = () => {

  return (
    <section className='Sale' >

        <div className="inner">
         
         <div className="box1">
            <h2>2016 TOP SUMMER DESTINATIONS NOW ON SALE</h2>
            <p>For the vast majority of its history, agriculture can be described new products agriculture can be described as having been organi as having been organic of its history,was a large supply of new products agriculture can be described as having been organic; only during the 20th century was a large supply of new products.</p>
            <button className='btn' >LOcations</button>
         </div>

         <div className="image1">
            <img src={saleimg} alt="" />
         </div>

         <div className="image">
            <img src={saleimg2} alt="" />
         </div>

         <div className="box">
            <h2>2016 TOP SUMMER DESTINATIONS NOW ON SALE</h2>
            <p>For the vast majority of its history, agriculture can be described new products agriculture can be described as having been organi as having been organic of its history,was a large supply of new products agriculture can be described as having been organic; only during the 20th century was a large supply of new products.</p>
            <button className='btn' >LOcations</button>
         </div>


        </div>

    </section>
  )
}

export default Sale