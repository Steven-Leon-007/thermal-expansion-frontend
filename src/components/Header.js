import React from 'react'
import Toggle from './Toggle'
import Logo from '../assets/page_content/logo_physics.webp'
const Header = ({ isDark, setIsDark }) => {

  return (
    <header>
      <nav>
        <div className="content">
          <div className="logo-container">
            <a href="/">
              <img src={Logo} alt="thermal expansion simulator logo" />
            </a>
          </div>
          <div className="links-container">
            <ul>
              <li><a href="/">Como funciona</a></li>
              <li><a href="/">Simulador</a></li>
              <li><a href="/">Acerca de</a></li>
              <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header