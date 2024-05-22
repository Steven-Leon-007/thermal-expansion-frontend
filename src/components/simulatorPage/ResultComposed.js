import React from 'react'

const ResultComposed = ({ materialPicked, liquidPicked, composedResult }) => {
    
    if (!materialPicked || !liquidPicked) {
        return;
    }
    const { name, thermalExpansionCoefficient, maxTemperature, minTemperature } = materialPicked;
    const { liquidName, liquidExpansionCoefficient, liquidMaxTemperature, liquidMinTemperature } = liquidPicked;

    const [liquidExpansion, solidExpansion, liquidSpilled] = composedResult;

    return (
        <div className="results-container">
            <h3>Datos</h3>
            <p>Sólido: {name}</p>
            <p>Coeficiente de Expansión: {thermalExpansionCoefficient}</p>
            <p>Temperatura Mínima: {minTemperature} °C</p>
            <p>Temperatura Máxima: {maxTemperature} °C</p>
            <br />
            <p>Líquido: {liquidName}</p>
            <p>Coeficiente de Expansión: {liquidExpansionCoefficient}</p>
            <p>Temperatura Mínima: {liquidMinTemperature} °C</p>
            <p>Temperatura Máxima: {liquidMaxTemperature} °C</p>

            {composedResult.length !== 0 ? (
                <div className="results">
                    <h3>Resultados</h3>
                    <p>Expansión Sólido: {solidExpansion.slice(0, 5)} m³</p>
                    <p>Expansión líquido: {liquidExpansion.slice(0, 5)} m³</p>
                    <p>Líquido derramado: {liquidSpilled.slice(0, 5)} m³</p>
                </div>
            ) : null}
        </div>
    )
}

export default ResultComposed