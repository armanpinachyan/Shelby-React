import React from 'react'
import './imgpage.css'
import { imgpage } from '../data/data'
import { Link } from 'react-router-dom'

const Imgpage = () => {
  return (
    <div className='imgpage' >
      {imgpage.imgpage1.map(el =>
          <div key={el.id} className="image">
          <img src={el.url} alt="" />
          </div>

      )}
      {imgpage.content.map(el =>
        <div key={el.id} className="box">
            <div  className="content1">
              <h2>{el.name}</h2>
              <p>{el.text}</p>
              <button className='btn' >{el.btn}</button>
              </div>
              <div className="content2">
                <span className='date1' >{el.date1}</span>
                <span className='date2' >{el.date2}</span>
                <span className='category1' >{el.category1}</span>
                <span className='category2' >{el.category2}</span>
                <span className='tags1' >{el.tags1}</span>
                <span className='tags2' >{el.tags2}</span>
               <Link to={'/imgpage2'} >  <i className="fa-sharp fa-solid fa-circle-right"></i> </Link>
              </div>
        </div>
        )}

      
    </div>
  )
}

export default Imgpage