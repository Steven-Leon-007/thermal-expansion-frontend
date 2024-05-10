import React from 'react'

const About = () => {
    return (
        <div className="about-section">
            <h2>Acerca del Simulador</h2>
            <div className="about-flex">
                <div className="about-row">
                    <div className="about-text">
                        <h3>Expansión térmica: Una perspectiva científica</h3>
                        <p>La expansión térmica es un fenómeno físico fundamental que ocurre cuando los materiales cambian su tamaño en respuesta a variaciones en la temperatura ambiente. Este proceso se rige por las leyes de la termodinámica y es de suma importancia en numerosas aplicaciones industriales y cotidianas.</p>
                    </div>
                    <div className="about-image">
                        <img src="https://picsum.photos/500" alt="Imagen de expansión térmica" />
                    </div>
                </div>
                <div className="about-row">
                    <div className="about-image">
                        <img src="https://picsum.photos/500" alt="Otra imagen de expansión térmica" />
                    </div>
                    <div className="about-text">
                        <h3>Comprende su impacto</h3>
                        <p>Desde la dilatación de puentes y vías férreas hasta el diseño de sistemas de ingeniería de precisión, la comprensión de la expansión térmica es crucial para garantizar la estabilidad y el funcionamiento adecuado de estructuras y dispositivos. Nuestra aplicación te brinda la oportunidad de explorar este fenómeno de manera interactiva y educativa.</p>
                    </div>
                </div>
                <div className="about-row">
                    <div className="about-text">
                        <h3>Explora con nuestra aplicación</h3>
                        <p>Descubre cómo nuestra aplicación te ayuda a entender y visualizar la expansión térmica de manera práctica y dinámica. Con herramientas interactivas y modelos precisos, podrás explorar este fenómeno desde diferentes ángulos y aplicaciones.</p>
                    </div>
                    <div className="about-image">
                        <img src="https://picsum.photos/500" alt="Tercera imagen de expansión térmica" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;