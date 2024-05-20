import React from 'react'
import ExpansionExample from '../assets/page_content/expansion_example.webp';
import ExpansionFormula from '../assets/page_content/thermal_expansion_formula.webp';
import ExpansionFormulaLight from '../assets/page_content/thermal_expansion_formula_light.webp';
import ContractionThermic from '../assets/page_content/contraction_thermic.webp';
import LiquidsFormula from '../assets/page_content/liquids_formula.webp'
import LiquidsFormulaLight from '../assets/page_content/liquids_formula_light.webp'
import ComposedSystems from '../assets/page_content/composed_systems.webp'

const About = ({isDark}) => {
    return (
        <div className="about-section" id='about'>
            <h2>Acerca del Simulador</h2>
            <div className="about-flex">
                <div className="about-row">
                    <div className="about-text">
                        <h3>Expansión térmica de sólidos y líquidos</h3>
                        <p>Expansión térmica es el fenómeno por el cual los materiales aumentan su tamaño (longitud, área o volumen) al ser calentados. Este proceso ocurre porque las partículas que componen el material (átomos o moléculas) ganan energía cinética cuando se incrementa la temperatura, lo que provoca que ocupen más espacio.</p>
                        <img src={isDark ? ExpansionFormula : ExpansionFormulaLight} alt="Thermal Expansion formula" id='formula' />
                        <p>Ejemplo: En grandes estructuras, como rascacielos, se incorporan juntas de expansión para permitir el movimiento de los materiales debido a las variaciones de temperatura. Esto previene agrietamientos y fallos estructurales.</p>
                    </div>
                    <div className="about-image">
                        <img src={ExpansionExample} alt="Thermal Expansion Example" />
                    </div>
                </div>
                <div className="about-row">
                    <div className="about-image">
                        <img src={ContractionThermic} alt="Thermal Contraction" />
                    </div>
                    <div className="about-text">
                        <h3>Contracción térmica en sólidos y líquidos</h3>
                        <p>
                            La contracción térmica es el fenómeno por el cual los materiales disminuyen su tamaño (volumen y/o longitud) cuando se enfrían. Ocurre porque las partículas que componen el material (átomos, moléculas) tienen menos energía cinética a temperaturas más bajas y, por lo tanto, ocupan menos espacio.
                            <br /><br />Ejemplo: Corona dentada y eje en un reductor, con la corona expandida térmicamente, el eje contraído térmicamente, se inserta en el orificio interno de la corona, la contracción térmica proporciona una unión muy firme entre los componentes, reduciendo la posibilidad de deslizamiento bajo cargas axiales.
                            <br /><br />Este tipo de corona de orientación se suele utilizar en aplicaciones como equipos de robótica, sector médico, máquina herramienta, equipos de envasado, equipos de procesamiento de alimentos, mesas giratorias, etc.

                        </p>
                    </div>
                </div>
                <div className="about-row">
                    <div className="about-text">
                        <h3>Expansión Térmica en un Recipiente Lleno de Líquido</h3>
                        <p>Cuando un recipiente lleno de un líquido se calienta, tanto el recipiente como el líquido se expanden. Sin embargo, la cantidad de expansión puede ser diferente para cada uno debido a sus distintos coeficientes de expansión térmica.</p>
                        <ul>
                            <li><b>Expansión del Líquido:</b> Los líquidos generalmente tienen un coeficiente de expansión volumétrica mayor que los sólidos. Cuando el líquido se calienta, su volumen aumenta significativamente.</li>
                            <li><b>Expansión del Recipiente:</b> El recipiente también se expandirá, pero generalmente en menor medida comparado con el líquido.</li>
                        </ul>
                        <p>Derrame del líquido: Si el líquido se expande más de lo que el recipiente puede acomodar, puede derramarse. Esto es común en situaciones donde no hay espacio de expansión previsto para el líquido.</p>
                        <img src={isDark ? LiquidsFormula : LiquidsFormulaLight} alt="Liquid Expansion formula" id='formula' />

                    </div>
                    <div className="about-image">
                        <img src={ComposedSystems} alt="Composed systems content"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;