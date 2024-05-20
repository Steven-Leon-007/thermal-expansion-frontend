import React from 'react'
import HomeDarkIllustration from '../../assets/page_content/home_dark_illustration.webp';
import HomeLightillustration from '../../assets/page_content/home_light_illustration.webp';

const HomeMain = ({isDark}) => {
  return (
    <div className="home-content">
      <div className="left-side-container">
        <h1>Simulador de Expansión Térmica</h1>
        <div className="right-side-container mobile-display">
        <img src={isDark ? HomeDarkIllustration : HomeLightillustration} alt="illustration of the project" className='main-image'/>
        </div>
        <p>Una herramienta de vanguardia que permite visualizar y comprender la dinámica de la expansión y contracción de los materiales bajo diferentes condiciones de temperatura.</p>
        <a href="/simulator" className='simulator-link'>Abrir Simulador</a>
      </div>
      <div className="right-side-container">
        <img src={isDark ? HomeDarkIllustration : HomeLightillustration} alt="illustration of the project" className='main-image'/>
      </div>
    </div>
  )
}

export default HomeMain;