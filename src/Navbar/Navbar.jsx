import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Shelbyimg/logo.png'
import { Link } from 'react-router-dom'
import { Menu } from '../data/data'

const Navbar = () => {

  const [menuFixed, setMenuFixed] = useState(false);
  const [menuclik, setmenuclick] = useState(false);
  const [iconclick, seticonclick] = useState(false);

  window.addEventListener('scroll', function (){
    if(window.scrollY > 600){
      setMenuFixed(true);
    } else {
      setMenuFixed(false);
    }
  })

  function menubar(x){
    return setmenuclick(!x)
  }

  function iconclickfanc(x){
    return seticonclick(!x)
  }


  return (
    <header className={menuFixed ? 'Navbar active' : 'Navbar'} id='navbar' >
      
      <div onClick={()=>menubar(menuclik)} className='fa-solid fa-bars' id="menu-bar"></div>


      <a href="#" className='logo'><img src={logo} alt="" /></a>

        <nav className={menuclik ? 'actives': ''} >
          {
            Menu.map((item) => {
              return (
                <div key={Math.random()} >
                  <div className='menu1' >
                    <Link to={item.url} className='link' >{item.name} <i onClick={()=> iconclickfanc(iconclick)} className={iconclick ? item.icon : item.icon2} ></i> </Link>
                    <div className={iconclick ? 'blue activess': 'blue'} style={{display: item?.subCategories ? 'initial' : 'none'}}>
                      {
                        item?.subCategories ? item.subCategories.map((subCat) => (
                          <span key={Math.random()} className='linkhover' >{subCat.name}</span>
                        )) : ''
                      }
                    </div>
                  </div>
                  <div className="grey"></div>
                </div>
              )
            })
          }
        </nav>

        <div className="icon">
        <i className="fa-solid fa-phone"></i>
        <span>Call Us: 555 6785</span>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        </div>

       <a id='up' href="#home"><i className="fa-sharp fa-solid fa-angle-up"></i></a>

    </header>
  )
}

export default Navbar