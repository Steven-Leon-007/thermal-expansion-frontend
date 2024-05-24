import React, { useState, useEffect } from 'react';

const SlidersWrapper = ({ onValuesChange, materialPicked, typeExpansion }) => {
    const { minTemperature, maxTemperature } = materialPicked;
    const [temperature, setTemperature] = useState(0);
    const [finalTemperature, setFinalTemperature] = useState(0);
    const [length, setLength] = useState(0);

    useEffect(() => {
        if (materialPicked) {
            setTemperature(0);
            setFinalTemperature(0);
            setLength(500);
            onValuesChange({ temperature: 0, finalTemperature: 0, length: 500 });
        }
    }, [materialPicked, minTemperature, onValuesChange]);

    const handleTemperatureChange = (event) => {
        const newTemperature = Number(event.target.value);
        setTemperature(newTemperature);
        onValuesChange({ temperature: newTemperature, finalTemperature, length });
    };

    const handleFinalTemperatureChange = (event) => {
        const newFinalTemperature = Number(event.target.value);
        setFinalTemperature(newFinalTemperature);
        onValuesChange({ temperature, finalTemperature: newFinalTemperature, length });
    };

    const handleLengthChange = (event) => {
        const newLength = Number(event.target.value);
        setLength(newLength);
        onValuesChange({ temperature, finalTemperature, length: newLength });
    };

    const getLabelAndUnit = () => {
        switch (typeExpansion) {
            case 'SUPERFICIAL':
                return { label: 'Área Inicial (Ai)', unit: 'm²' };
            case 'VOLUMETRIC':
                return { label: 'Volumen Inicial (Vi)', unit: 'm³' };
            case 'LINEAR':
            default:
                return { label: 'Longitud Inicial (Li)', unit: 'm' };
        }
    };

    const { label, unit } = getLabelAndUnit();

    return (
        <div className="slider-component">
            <div className="slider-container">
                <label htmlFor="temperature-slider">Temperatura Inicial (Ti)<br />
                    {temperature}°C
                </label>
                <input
                    id="temperature-slider"
                    type="range"
                    min={minTemperature}
                    max={maxTemperature}
                    value={temperature}
                    onChange={handleTemperatureChange}
                />
            </div>
            <div className="slider-container final-temperature">
                <label htmlFor="final-temperature-slider">Temperatura Final (Tf)<br />
                    {finalTemperature}°C
                </label>
                <input
                    id="final-temperature-slider"
                    type="range"
                    min={minTemperature}
                    max={maxTemperature}
                    value={finalTemperature}
                    onChange={handleFinalTemperatureChange}
                />
            </div>
            <div className="slider-container">
                <label htmlFor="length-slider">{label}<br />
                    {length} {unit}
                </label>
                <input
                    id="length-slider"
                    type="range"
                    min="10"
                    max="1000"
                    value={length}
                    onChange={handleLengthChange}
                />
            </div>
        </div>
    );
};

export default SlidersWrapper;
