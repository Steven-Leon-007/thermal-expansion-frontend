import React, { useEffect, useRef } from 'react';
import { ReactComponent as SimulationFirst } from '../../assets/page_content/first_image_about.svg';
import { ReactComponent as SimulationSecond } from '../../assets/page_content/second_image_about.svg';
import { ReactComponent as SimulationThird } from '../../assets/page_content/third_image_about.svg';

const HowItWorks = ({ isDark }) => {
    const firstSvgRef = useRef(null);
    const secondSvgRef = useRef(null);
    const thirdSvgRef = useRef(null);

    useEffect(() => {
        const updateFill = (ref) => {
            if (ref.current) {
                const gElement = ref.current.querySelector('g');
                if (gElement) {
                    gElement.setAttribute('fill', isDark ? '#f2f2f2' : '#000000');
                }
            }
        };

        updateFill(firstSvgRef);
        updateFill(secondSvgRef);
        updateFill(thirdSvgRef);
    }, [isDark]);

    return (
        <div className="explanation-container" id='how-it-works'>
            <h2>¿Como funciona?</h2>
            <div className="explanation-flex">
                <div className="column-content">
                    <h3>Simulación precisa</h3>
                    <p>Nuestro simulador utiliza modelos matemáticos basados en las leyes de la termodinámica para calcular con precisión cómo los materiales se expanden o contraen en respuesta al calor. Con algoritmos optimizados y datos científicamente respaldados.</p>
                    <SimulationFirst ref={firstSvgRef} />
                </div>
                <div className="column-content">
                    <h3>Interfaz intuitiva</h3>
                    <p>La interfaz de usuario de nuestra aplicación ha sido diseñada pensando en la facilidad de uso y la accesibilidad. Con controles intuitivos y claros, podrás ajustar la temperatura, seleccionar el material y observar instantáneamente cómo cambia su tamaño.</p>
                    <SimulationSecond ref={secondSvgRef} />
                </div>
                <div className="column-content">
                    <h3>Personalización completa</h3>
                    <p>Adaptamos la experiencia de simulación a tus necesidades específicas. Desde elegir entre una amplia variedad de materiales hasta ajustar los parámetros de temperatura y tamaño, te ofrecemos total libertad para personalizar cada simulación.</p>
                    <SimulationThird ref={thirdSvgRef} />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
