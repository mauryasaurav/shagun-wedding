import React, { useState } from 'react'
import Logo from '../assets/images/download.webp'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Wedding Services</a>
            </li>
            <li>
              <a href='#story'>About US</a>
            </li>
            <li>
              <a href='#organization'>Success Stories</a>
            </li>
            <li>
              <a href='#gallery'>Gallery</a>
            </li>
            <li>
              <a href='#whenwhere'>Blogs</a>
            </li>
            <li>
              <a href='#rsvp'>Register</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
          ShubhSangam Matrimonial
            <br />
            01.12.2016
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
