import React from 'react'
import './Imgpage2.css'
import { imgpage2 } from '../data/data'
import { Link } from 'react-router-dom'

const Imgpage2 = () => {
  return (
    <div className='Imgpage2' >
        {imgpage2.imgpage1.map(el =>
          <div key={el.id} className="image">
          <img src={el.url} alt="" />
          </div>

      )}
      {imgpage2.content.map(el =>
        <div key={el.id} className="box">
            <div className="content1">
              <h2>{el.name}</h2>
              <p>{el.text}</p>
              <button className='btn' >{el.btn}</button>
              <Link to={'/imgpage'} >  <i className="fa-solid fa-circle-left"></i></Link>
              </div>
              <div className="content2">
                <span className='date1' >{el.date1}</span>
                <span className='date2' >{el.date2}</span>
                <span className='category1' >{el.category1}</span>
                <span className='category2' >{el.category2}</span>
                <span className='tags1' >{el.tags1}</span>
                <span className='tags2' >{el.tags2}</span>
              </div>
        </div>
        )}
    </div>
  )
}

export default Imgpage2