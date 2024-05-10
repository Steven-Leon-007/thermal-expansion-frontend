import React, { useEffect } from 'react'
import HowItWorks from './HowItWorks';
import HomeMain from './HomeMain';
import About from './About';

const Main = () => {
  useEffect(() => {
    fetch('http://localhost:8080/getSolidMaterials')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener materiales:', error);
      });
  }, []);

  return (
    <main>
      <HomeMain />
      <HowItWorks />
      <About />
    </main>
  )
}

export default Main