import React from 'react';

const ResultsDisplay = ({ materialPicked, materialData, finalTemperature, onFinalTemperatureChange, onTemperatureChange, onLengthChange, setIsEditing }) => {
  if (!materialPicked) {
    return;
  }

  const { name, thermalExpansionCoefficient, maxTemperature, minTemperature } = materialPicked;
  const { temperature, length } = materialData;

  return (
    <div className="results-container">
      <h3>Datos</h3>
      <p>Material: {name}</p>
      <p>Coeficiente de Expansión: {thermalExpansionCoefficient}</p>
      <p>Temperatura Mínima: {minTemperature} °C</p>
      <p>Temperatura Máxima: {maxTemperature} °C</p>
      <label htmlFor="temperature">Temperatura Inicial (°C):</label>
      <input
        type="number"
        name="temperature"
        id="temperature-input"
        min={minTemperature}
        max={maxTemperature}
        value={temperature}
        onChange={onTemperatureChange}
        onFocus={() => setIsEditing(prev => ({ ...prev, temperature: true }))}
      />
      <label htmlFor="temperature">Temperatura Final (°C):</label>
      <input
        type="number"
        name="temperature"
        id="temperature-input"
        min={minTemperature}
        max={maxTemperature}
        value={finalTemperature}
        onChange={onFinalTemperatureChange}
        onFocus={() => setIsEditing(prev => ({ ...prev, temperature: true }))}
      />
      <label htmlFor="length">Longitud Inicial (m):</label>
      <input
        type="number"
        name="length"
        id="length-input"
        min={10}
        max={1000}
        value={length}
        onChange={onLengthChange}
        onFocus={() => setIsEditing(prev => ({ ...prev, length: true }))}
      />
    </div>
  );
}

export default ResultsDisplay;
