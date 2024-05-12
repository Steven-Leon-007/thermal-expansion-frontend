import React from 'react'
import Logo from '../assets/page_content/logo_physics.webp'
import GitHubLogo from '../assets/page_content/github-mark-white.svg'
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-side">
          <img src={Logo} alt="Logo app" />
          <p>© 2024 by UPTC Students. All rights reserved.</p>
        </div>
        <div className="right-side">
          <a href="https://github.com/Steven-Leon-007/physics-project" target='_blank' rel="noreferrer" title='Backend of the project'>
            <img src={GitHubLogo} alt="Logo Github Redirect" />
          </a>
          <a href="https://github.com/Steven-Leon-007/thermal-expansion-frontend" target='_blank' rel="noreferrer" title='Frontend of the project'>
            <img src={GitHubLogo} alt="Logo Github Redirect" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer