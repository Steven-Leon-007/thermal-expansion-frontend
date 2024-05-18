import React, { useCallback, useState } from 'react';
import SlidersWrapper from './SlidersWrapper';
import SolidWrapper from './SolidWrapper';

const ExpansionHolder = ({ materialPicked }) => {
  const [length, setLength] = useState(500); 


  const onValuesChange = useCallback(({ length }) => {
    setLength(length); 
  }, []);


  if (!materialPicked) {
    return <div className='info-non-selected'>Selecciona un material para continuar.</div>;
  }
  const { maxTemperature, minTemperature, texturePath } = materialPicked;



  const originalHeight = 500;  
  const scaleX = length / originalHeight;  

  return (
    <div className="expansion-holder">
      <div className="display-expansion-controls">
        <SolidWrapper texturePath={texturePath} scaleX={scaleX}/>
        <SlidersWrapper
          maxTemperature={maxTemperature}
          minTemperature={minTemperature}
          onValuesChange={onValuesChange}
          materialPicked={materialPicked}
        />
      </div>
        <button className="calc-expansion">Calcular Expansión</button>
    </div>
  );
};

export default ExpansionHolder;
