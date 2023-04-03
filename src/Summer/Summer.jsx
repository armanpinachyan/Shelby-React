import React, { useEffect, useRef, useState } from 'react'
import './Summer.css'
import { Summers } from '../data/data'
import SummerItem from './summer-item'

const Summer = () => {


  const [scrollTop, setScrollTop] = useState(0);
  const sectionTop = useRef();



  useEffect(() => {
    if(sectionTop.current){
      setScrollTop(sectionTop.current.offsetTop)
    }
  }, [sectionTop])
  

  return (
    <>
    <div className='Summer' id='summer' ref={sectionTop}>

      <h2 className="heading">2016 TOP SUMMER DESTINATIONS NOW ON SALE</h2>

      <div className="inner">
      {
        Summers.map(el => <SummerItem key={Math.random()} scrollTop={scrollTop} item={el} /> )
      }
      </div>

    </div>
  
    <div className="line">For the vast majority of its history, agriculture can be described as having been organicorganic</div>
    </>
  )
}

export default Summer