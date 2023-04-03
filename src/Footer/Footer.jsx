import React from 'react'
import { Footers } from '../data/data'
import './Footer.css'
import { Link } from 'react-router-dom'



const Footer = () => {



  return (

    <footer>

        <div className="inner">

        {Footers.footer1.map(el =>
                
                    <div key={el.id}  className="box1">
                    <img src={el.logoimg} alt="" />
                    <p>{el.text}</p>
                    <div className="call">
                    <i className={el.iconcontact} ></i>
                        <span>{el.contact}</span>
                    </div>
                    <div className="email">
                        <i className={el.emailicon} ></i>
                        <span>{el.email}</span>
                    </div>
                    <div className="adress">
                        <i className={el.adressicon} ></i>
                        <span>{el.adress}</span>
                    </div>
                    </div>
                     )
                    }
                    {Footers.footer2.map(el =>
                    <div key={el.id} className="box">
                        <h4>{el.name}</h4>
                        <samp>{el.text1}</samp>
                        <samp className='text' >{el.text2}</samp>
                        <span>{el.text3}</span>
                        <span>{el.text4}</span>
                        <span>{el.text5}</span>
                        <samp>{el.text6}</samp>
                        <samp>{el.text7}</samp>
                        <span>{el.text8}</span>
                        <span>{el.text9}</span>
                        <span>{el.text10}</span>
                    </div>
                    )}              
                    
                    {Footers.footer3.map(el => 
                    <div key={el.id} className="box">
                        <h3>{el.name2}</h3>
                    </div> ) }
                
           
        </div>

         <div className="footertext">
           <p>{Footers.footer4[0].foootertext} <Link to={'https://themeforest.net/'} target={'_blank'} >{Footers.footer4[0].foootertext2}</Link> </p>
        </div> 

    </footer>
  )
}

export default Footer