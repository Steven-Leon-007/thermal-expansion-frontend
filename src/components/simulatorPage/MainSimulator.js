import React, { useEffect, useState } from 'react'
import NavExpansionPicker from './NavExpansionPicker';
import ElementsPicker from './ElementsPicker';
import ResultsDisplay from './ResultsDisplay';
import ExpansionHolder from './ExpansionHolder';


const MainSimulator = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/getSolidMaterials')
            .then(response => response.json())
            .then(data => {
                setMaterials(data);
            })
            .catch(error => {
                console.error('Error al obtener materiales:', error);
            });
    }, []);

    const onSelectMaterial = (material) => {
        console.log(material);
    }

    return (
        <div>
            <NavExpansionPicker />
            <div className="simulator-container">
                <ElementsPicker materials={materials} onSelectMaterial={onSelectMaterial} />
                <ExpansionHolder />
                <ResultsDisplay />
            </div>
        </div>
    );
}

export default MainSimulator