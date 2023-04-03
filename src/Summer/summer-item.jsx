import React, { useEffect, useRef, useState } from 'react'

const SummerItem = (props) => {


    let count = 0;
    const numBlock = useRef();
    let speed = 50
    
    let successAnimation = true;
    window.addEventListener('scroll', function(){
    // return window.scrollY > 1200

    const scrollTop = window.scrollY;

    const scrollTopSection = props.scrollTop;

    if(scrollTop >= (scrollTopSection - 500) && successAnimation){
      successAnimation = false;
      if(numBlock.current){
        if(props.item.num < 100){
            speed = 170
        }
        const interval = setInterval(()=>{
            count++;
            numBlock.current.innerText = count;
            if(count >= props.item.num){
              clearInterval(interval)
            }
          }, speed)
      }

    }
    
  })


   

  return (
    <div key={props.item.id} className="box">
         <h2 ref={numBlock}></h2>
          <h4>{props.item.name}</h4>
          <p>{props.item.text}</p>
    </div>
  )
}

export default SummerItem