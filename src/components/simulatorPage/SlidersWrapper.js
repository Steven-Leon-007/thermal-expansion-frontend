import React, { useState, useEffect } from 'react'

const SlidersWrapper = ({ onValuesChange, materialPicked }) => {
    const { minTemperature, maxTemperature } = materialPicked;
    const [temperature, setTemperature] = useState(minTemperature || 0);
    const [length, setLength] = useState(0);

    useEffect(() => {
        if (materialPicked) {
            setTemperature(0);
            setLength(500);
            onValuesChange({ temperature: 0, length: 500 });
        }
    }, [materialPicked, minTemperature, onValuesChange]);

    const handleTemperatureChange = (event) => {
        const newTemperature = Number(event.target.value);
        setTemperature(newTemperature);
        onValuesChange({ temperature: newTemperature, length });
    };

    const handleLengthChange = (event) => {
        const newLength = Number(event.target.value);
        setLength(newLength);
        onValuesChange({ temperature, length: newLength });
    };


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
            <div className="slider-container">
                <label htmlFor="length-slider">Longitud Inicial (Li)<br />
                    {length} m
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