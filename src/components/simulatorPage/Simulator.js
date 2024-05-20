import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../Footer'
import Header from '../Header'
import MainSimulator from './MainSimulator';
import '../../styles/_MainSimulator.scss';
import About from '../About';


const Simulator = ({isDark, setIsDark}) => {
    return (
        <HelmetProvider>
            <div className="App" data-theme={isDark ? 'dark' : 'light'}>
                <Helmet>
                    <title>Simulator - Thermal Expansion Simulator by UPTC</title>
                </Helmet>
                <Header isDark={isDark} setIsDark={setIsDark} />
                <MainSimulator />
                <About isDark={isDark}/>
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default Simulator