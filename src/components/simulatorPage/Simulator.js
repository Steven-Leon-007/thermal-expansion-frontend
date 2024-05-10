import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../Footer'
import Header from '../Header'


const Simulator = ({isDark, setIsDark}) => {
    return (
        <HelmetProvider>
            <div className="App" data-theme="dark">
                <Helmet>
                    <title>Simulator - Thermal Expansion Simulator by UPTC</title>
                </Helmet>
                <Header />
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default Simulator