import React, { useCallback, useEffect, useState } from 'react';
import NavExpansionPicker from './NavExpansionPicker';
import ElementsPicker from './ElementsPicker';
import ResultsDisplay from './ResultsDisplay';
import ExpansionHolder from './ExpansionHolder';

const MainSimulator = () => {
    const [materials, setMaterials] = useState([]);
    const [materialPicked, setMaterialPicked] = useState(null);
    const [materialData, setMaterialData] = useState({
        temperature: "",
        finalTemperature: "",
        length: "",
    });

    const [isEditing, setIsEditing] = useState({
        temperature: false,
        finalTemperature: false,
        length: false
    });

    const [materialResult, setMaterialResult] = useState(0);
    const [typeExpansion, setTypeExpansion] = useState("");

    const getExpansionType = (expansion) => {
        setTypeExpansion(expansion);
    }

    useEffect(() => {
        fetch('https://proyectoclase.onrender.com/getSolidMaterials')
            .then(response => response.json())
            .then(data => {
                setMaterials(data);
            })
            .catch(error => {
                console.error('Error al obtener materiales:', error);
            });
    }, []);

    const onSelectMaterial = (material) => {
        setMaterialPicked(material);
    }

    const dataRetrievedMaterial = useCallback((materialData) => {
        if (!isEditing.temperature) {
            setMaterialData(prevData => ({
                ...prevData,
                temperature: materialData.temperature
            }));
        }
        if (!isEditing.finalTemperature) {
            setMaterialData(prevData => ({
                ...prevData,
                finalTemperature: materialData.finalTemperature
            }));
        }
        if (!isEditing.length) {
            setMaterialData(prevData => ({
                ...prevData,
                length: materialData.length
            }));
        }
    }, [isEditing]);

    const handleTemperatureChange = (e) => {
        setIsEditing(prev => ({
            ...prev,
            temperature: true
        }));
        setMaterialData(prevData => ({
            ...prevData,
            temperature: e.target.value
        }));
    };

    const handleFinalTemperatureChange = (e) => {
        setIsEditing(prev => ({
            ...prev,
            finalTemperature: true
        }));
        setMaterialData(prevData => ({
            ...prevData,
            finalTemperature: e.target.value
        }));
    };

    const handleLengthChange = (e) => {
        setIsEditing(prev => ({
            ...prev,
            length: true
        }));
        setMaterialData(prevData => ({
            ...prevData,
            length: e.target.value
        }));
    };

    const handleSliderChange = (type, value) => {
        setIsEditing(prev => ({
            ...prev,
            [type]: false
        }));
        setMaterialData(prevData => ({
            ...prevData,
            [type]: value
        }));
    };

    return (
        <div>
            <NavExpansionPicker getExpansionType={getExpansionType} />
            <div className="simulator-container">
                {typeExpansion ? (<ElementsPicker materials={materials} onSelectMaterial={onSelectMaterial} />) : null}

                <ExpansionHolder
                    materialPicked={materialPicked}
                    dataRetrievedMaterial={dataRetrievedMaterial}
                    onSliderChange={handleSliderChange}
                    setMaterialResult={setMaterialResult}
                    materialData={materialData}
                    typeExpansion={typeExpansion}
                />
                <ResultsDisplay
                    materialPicked={materialPicked}
                    materialData={materialData}
                    onTemperatureChange={handleTemperatureChange}
                    finalTemperature={materialData.finalTemperature}
                    onFinalTemperatureChange={handleFinalTemperatureChange}
                    onLengthChange={handleLengthChange}
                    setIsEditing={setIsEditing}
                    materialResult={materialResult}
                />
            </div>
        </div>
    );
}

export default MainSimulator;
