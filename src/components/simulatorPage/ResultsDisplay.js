import React from 'react'

const ResultsDisplay = ({ materialPicked }) => {
  if (!materialPicked) {
    return;
  }
  const { name, thermalExpansionCoefficient, maxTemperature, minTemperature } = materialPicked;


  return (
    <div className="results-container">
      <h3>Datos</h3>
      <p>Material: {name}</p>
      <p>Coeficiente de Expansión: {thermalExpansionCoefficient}</p>
      <p>Temperatura Mínima: {minTemperature} °C</p>
      <p>Temperatura Máxima: {maxTemperature} °C</p>
      <p>Longitud Inicial (Li): </p>
    </div>
  )
}

export default ResultsDisplay;