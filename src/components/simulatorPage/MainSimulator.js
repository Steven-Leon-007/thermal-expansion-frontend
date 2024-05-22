import React, { useCallback, useEffect, useState } from 'react';
import NavExpansionPicker from './NavExpansionPicker';
import ElementsPicker from './ElementsPicker';
import ResultsDisplay from './ResultsDisplay';
import ExpansionHolder from './ExpansionHolder';
import ResultComposed from './ResultComposed';

const MainSimulator = () => {
    const [materials, setMaterials] = useState([]);
    const [liquids, setLiquids] = useState([]);
    const [materialPicked, setMaterialPicked] = useState(null);
    const [liquidPicked, setLiquidPicked] = useState(null);
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
    const [composedResult, setComposedResult] = useState([]);
    const [typeExpansion, setTypeExpansion] = useState("");

    const getExpansionType = (expansion) => {
        setTypeExpansion(expansion);
    }

    useEffect(() => {
        //TODO: remind to change this
        fetch('https://proyectoclase.onrender.com/getSolidMaterials')
            .then(response => response.json())
            .then(data => {
                setMaterials(data);
            })
            .catch(error => {
                console.error('Error al obtener materiales:', error);
            });

        if (typeExpansion === "COMPUESTOS") {
            fetch('https://proyectoclase.onrender.com/getLiquidMaterials')
                .then(response => response.json())
                .then(data => {
                    setLiquids(data);
                })
                .catch(error => {
                    console.error('Error al obtener materiales:', error);
                });
        }
    }, [typeExpansion]);

    const onSelectMaterial = (material) => {
        setMaterialPicked(material);
    }

    const onSelectLiquid = (liquid) => {
        const updatedLiquid = {
            ...liquid,
            liquidName: liquid.name,
            liquidExpansionCoefficient: liquid.thermalExpansionCoefficient,
            liquidMaxTemperature: liquid.maxTemperature,
            liquidMinTemperature: liquid.minTemperature,
        };

        delete updatedLiquid.name;
        delete updatedLiquid.thermalExpansionCoefficient;
        delete updatedLiquid.maxTemperature;
        delete updatedLiquid.minTemperature;

        setLiquidPicked(updatedLiquid);
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
                {typeExpansion ?
                    (<ElementsPicker
                        materials={materials}
                        onSelectMaterial={onSelectMaterial}
                        liquids={liquids}
                        onSelectLiquid={onSelectLiquid}
                        typeExpansion={typeExpansion}
                    />)
                    : null}

                <ExpansionHolder
                    materialPicked={materialPicked}
                    dataRetrievedMaterial={dataRetrievedMaterial}
                    onSliderChange={handleSliderChange}
                    setMaterialResult={setMaterialResult}
                    setComposedResult={setComposedResult}
                    materialData={materialData}
                    typeExpansion={typeExpansion}
                    liquidPicked={liquidPicked}
                />
                {typeExpansion === "COMPUESTOS" ? (
                    <ResultComposed
                        materialPicked={materialPicked}
                        liquidPicked={liquidPicked}
                        composedResult={composedResult}
                    />
                ) : (
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
                )}
            </div>
        </div>
    );
}

export default MainSimulator;
