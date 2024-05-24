import React, { useCallback, useState, useEffect } from 'react';
import SlidersWrapper from './SlidersWrapper';
import SolidWrapper from './SolidWrapper';
import ComposedSliders from './ComposedSliders';

const ExpansionHolder = ({ materialPicked, dataRetrievedMaterial, setMaterialResult, setComposedResult, typeExpansion, liquidPicked }) => {

  const [length, setLength] = useState(500);
  const [liquidLength, setLiquidLength] = useState(500);
  const [temperature, setTemperature] = useState(0);
  const [finalTemperature, setFinalTemperature] = useState(0);
  const [calculatedLength, setCalculatedLength] = useState(0);
  const [calculatedScale, setCalculatedScale] = useState(length / 500);


  const onValuesChange = useCallback(({ temperature, finalTemperature, length, liquidLength }) => {
    setLength(length);
    setTemperature(temperature);
    setFinalTemperature(finalTemperature);
    setLiquidLength(liquidLength);
  }, []);

  useEffect(() => {
    dataRetrievedMaterial({ temperature, finalTemperature, length, liquidLength });
  }, [temperature, finalTemperature, length, dataRetrievedMaterial, liquidLength]);

  useEffect(() => {
    setCalculatedScale((Number(length) + Number(calculatedLength)) / 500);
  }, [calculatedLength]);


  if (!typeExpansion) {
    return <div className='info-non-selected'>Selecciona un tipo de expansión para continuar.</div>;
  }
  else if (!materialPicked) {
    return <div className='info-non-selected'>Selecciona un material para continuar.</div>;
  } else if (typeExpansion === "COMPUESTOS" && !liquidPicked) {
    return <div className='info-non-selected'>Selecciona los materiales para continuar.</div>;
  }

  const { texturePath, name } = materialPicked;
  let liquidTexturePath = null;
  let liquidName = null;

  if (liquidPicked) {
    ({ liquidTexturePath, liquidName } = liquidPicked);
  }

  const originalHeight = 500;
  const scaleX = length / originalHeight;
  const scaleXLiquid = liquidLength / originalHeight;

  const handleCalculateExpansion = async () => {
    const materialToCalc = {
      solidMaterialName: name,
      solidInitialTemperature: temperature,
      solidFinalTemperature: finalTemperature,
      solidInitialDimension: length,
      expansionType: typeExpansion
    };

    try {
      const response = await fetch('https://proyectoclase.onrender.com/calculateExpansionSystem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(materialToCalc)
      });

      if (response.ok) {
        const result = await response.json();
        const resultSliced = JSON.stringify(result).slice(0, 5);
        setCalculatedLength(resultSliced);
        setMaterialResult(resultSliced);
      } else {
        console.error('Failed to calculate expansion');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleComposedExpansion = async () => {
    const body = {
      solidMaterialName: name,
      solidInitialTemperature: temperature,
      solidFinalTemperature: finalTemperature,
      solidInitialDimension: length,
      liquidMaterialName: liquidName,
      liquidInitialTemperature: temperature,
      liquidFinalTemperature: finalTemperature,
      liquidInitialDimension: liquidLength,
    };

    try {
      const response = await fetch('https://proyectoclase.onrender.com/calculateCompositeSystem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const result = await response.json();
        setComposedResult(result);
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
          typeExpansion={typeExpansion}
          texturePath={texturePath}
          scaleX={scaleX}
          calculatedScale={calculatedScale} />
        {liquidPicked && typeExpansion === "COMPUESTOS" ? (
          <ComposedSliders
            onValuesChange={onValuesChange}
            materialPicked={materialPicked}
            liquidPicked={liquidPicked} />
        ) : (
          <SlidersWrapper
            onValuesChange={onValuesChange}
            materialPicked={materialPicked}
            typeExpansion={typeExpansion}

          />
        )
        }
      </div>
      {liquidPicked && typeExpansion === "COMPUESTOS" ? (
        <button className="calc-expansion" onClick={handleComposedExpansion}>Calcular Sistema Compuesto</button>
      ) : (
        <button className="calc-expansion" onClick={handleCalculateExpansion}>Calcular Expansión</button>
      )
      }
    </div>
  );
};

export default ExpansionHolder;
