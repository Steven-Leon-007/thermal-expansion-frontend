import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Main from './Main'

const HomePage = ({isDark, setIsDark}) => {

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Main isDark={isDark}/>
      <Footer />
    </div>
  )
}

export default HomePage;