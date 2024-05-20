import React from 'react';

const NavExpansionPicker = ({ getExpansionType }) => {

  const handleChangeExpansion = (event) => {
    const buttonTarget = event.target.textContent;
    let expansion = '';

    if (buttonTarget.includes('Lineal')) {
      expansion = 'LINEAR';
    } else if (buttonTarget.includes('Superficial')) {
      expansion = 'SUPERFICIAL';
    } else if (buttonTarget.includes('Volumetrica')) {
      expansion = 'VOLUMETRIC';
    } else if (buttonTarget.includes('Compuestos')) {
      expansion = 'COMPUESTOS';
    }

    getExpansionType(expansion);
  };

  return (
    <div className='nav_expansion_picker'>
      <button onClick={handleChangeExpansion}>Expansión Lineal</button>
      <button onClick={handleChangeExpansion}>Expansión Superficial</button>
      <button onClick={handleChangeExpansion}>Expansión Volumetrica</button>
      <button onClick={handleChangeExpansion}>Sistemas Compuestos</button>
    </div>
  );
};

export default NavExpansionPicker;
