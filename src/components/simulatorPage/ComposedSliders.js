import React, { useEffect, useState } from 'react'

const ComposedSliders = ({ onValuesChange, liquidPicked, materialPicked }) => {
    const { liquidMinTemperature, liquidMaxTemperature } = liquidPicked;
    const [temperature, setTemperature] = useState(0);
    const [finalTemperature, setFinalTemperature] = useState(0);
    const [length, setLength] = useState(0);
    const [liquidLength, setLiquidLength] = useState(0);

    useEffect(() => {
        if (materialPicked || liquidPicked) {
            setTemperature(0);
            setFinalTemperature(0);
            setLength(500);
            setLiquidLength(500);
            onValuesChange({ temperature: 0, finalTemperature: 0, length: 500, liquidLength: 500 });
        }


    }, [materialPicked, liquidMinTemperature, onValuesChange]);

    const handleTemperatureChange = (event) => {
        const newTemperature = Number(event.target.value);
        setTemperature(newTemperature);
        onValuesChange({ temperature: newTemperature, finalTemperature, length, liquidLength });
    };

    const handleFinalTemperatureChange = (event) => {
        const newFinalTemperature = Number(event.target.value);
        setFinalTemperature(newFinalTemperature);
        onValuesChange({ temperature, finalTemperature: newFinalTemperature, length, liquidLength });
    };

    const handleLengthChange = (event) => {
        const newLength = Number(event.target.value);
        setLength(newLength);
        onValuesChange({ temperature, finalTemperature, length: newLength, liquidLength });
    };

    const handleLengthLiquidChange = (event) => {
        const newLength = Number(event.target.value);
        setLiquidLength(newLength);
        onValuesChange({ temperature, finalTemperature, length, liquidLength: newLength });
    };

    return (
        <div className="slider-component">
            <div className="slider-container composed-sliders">
                <label htmlFor="temperature-slider">Temperatura Inicial (Ti)<br />
                    {temperature}°C
                </label>
                <input
                    type="range"
                    min={liquidMinTemperature}
                    max={liquidMaxTemperature}
                    value={temperature}
                    onChange={handleTemperatureChange}
                />
            </div>
            <div className="slider-container composed-sliders final-temperature">
                <label htmlFor="final-temperature-slider">Temperatura Final (Tf)<br />
                    {finalTemperature}°C
                </label>
                <input
                    type="range"
                    min={liquidMinTemperature}
                    max={liquidMaxTemperature}
                    value={finalTemperature}
                    onChange={handleFinalTemperatureChange}
                />
            </div>
            <div className="slider-container">
                <label htmlFor="length-slider">Volumen Inicial Sólido (ViS)<br />
                    {length} m³
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
            <div className="slider-container">
                <label htmlFor="length-slider-liquid">Volumen Inicial Líquido (ViL)<br />
                    {liquidLength} m³
                </label>
                <input
                    id="length-slider-liquid"
                    type="range"
                    min="10"
                    max={length}
                    value={liquidLength}
                    onChange={handleLengthLiquidChange}
                />
            </div>
        </div>
    );
}

export default ComposedSliders