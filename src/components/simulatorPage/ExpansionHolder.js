import React, { useCallback, useState, useEffect } from 'react';
import SlidersWrapper from './SlidersWrapper';
import SolidWrapper from './SolidWrapper';

const ExpansionHolder = ({ materialPicked, dataRetrievedMaterial, setMaterialResult }) => {
  const [length, setLength] = useState(500);
  const [temperature, setTemperature] = useState(0);
  const [finalTemperature, setFinalTemperature] = useState(0);
  const [calculatedLength, setCalculatedLength] = useState(0);
  const [calculatedScale, setCalculatedScale] = useState(length / 500);

  const onValuesChange = useCallback(({ temperature, finalTemperature, length }) => {
    setLength(length);
    setTemperature(temperature);
    setFinalTemperature(finalTemperature);
  }, []);

  useEffect(() => {
    dataRetrievedMaterial({ temperature, finalTemperature, length });
  }, [temperature, finalTemperature, length, dataRetrievedMaterial]);

  useEffect(() => {
    setCalculatedScale((length + calculatedLength) / 500);
  }, [calculatedLength]);

  if (!materialPicked) {
    return <div className='info-non-selected'>Selecciona un material para continuar.</div>;
  }

  const { maxTemperature, minTemperature, texturePath, name } = materialPicked;

  const originalHeight = 500;
  const scaleX = length / originalHeight;

  const handleCalculateExpansion = async () => {
    const materialToCalc = {
      solidMaterialName: name,
      solidInitialTemperature: temperature,
      solidFinalTemperature: finalTemperature,
      solidInitialDimension: length,
      expansionType: "LINEAR"
    };

    try {
      const response = await fetch('http://localhost:8080/calculateExpansionSystem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(materialToCalc)
      });

      if (response.ok) {
        const result = await response.json();
        setCalculatedLength(result);
        setMaterialResult(result);
      } else {
        console.error('Failed to calculate expansion');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="expansion-holder">
      <div className="display-expansion-controls">
        <SolidWrapper
          texturePath={texturePath}
          scaleX={scaleX}
          calculatedScale={calculatedScale} />
        <SlidersWrapper
          maxTemperature={maxTemperature}
          minTemperature={minTemperature}
          onValuesChange={onValuesChange}
          materialPicked={materialPicked}
        />
      </div>
      <button className="calc-expansion" onClick={handleCalculateExpansion}>Calcular Expansión</button>
    </div>
  );
};

export default ExpansionHolder;
