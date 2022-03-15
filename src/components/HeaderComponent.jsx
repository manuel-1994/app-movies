import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () =>{
    (window.scrollY>=50)?setNavbar(true):setNavbar(false)
  }
  window.addEventListener('scroll', changeBackground)

  return (
      <header className={navbar?'header active': 'header'}>
        <nav className='nav flex'>

          <ul className='nav__list'>
            <Link className='nav__link' to="/">
              <img className='loco__img' src="" alt="logo" />
            </Link>
            <Link className='nav__link' to="/">INICIO</Link>
            <Link className='nav__link' to="/movies">TODAS LAS PELICULAS</Link>
            <Link className='nav__link' to="/">GENEROS</Link>
            <Link className='nav__link' to="/">PRODUCTORAS</Link>
          </ul>

          <ul className='nav__list flex'>
            <li className='nav__item'>
              <button className='btn' >
                buscar
              </button>
            </li>

            <li className='nav__item'>
                <img src="" alt="user" />
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default HeaderComponent