import React from 'react'
import Logo from '../assets/page_content/logo_physics.webp'
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-side">
          <img src={Logo} alt="Logo app" />
          <p>© 2024 by UPTC Students. All rights reserved.</p>
        </div>
        <div className="right-side">
          <a href="https://github.com/Steven-Leon-007/physics-project" target='_blank' rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer