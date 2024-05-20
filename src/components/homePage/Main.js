import React from 'react'
import HowItWorks from './HowItWorks';
import HomeMain from './HomeMain';
import About from '../About';

const Main = ({isDark}) => {

  return (
    <main>
      <HomeMain isDark={isDark}/>
      <HowItWorks isDark={isDark}/>
      <About />
    </main>
  )
}

export default Main