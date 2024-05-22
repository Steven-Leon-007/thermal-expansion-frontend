import React, { useState } from 'react';

const ElementsPicker = ({ materials, onSelectMaterial, liquids, onSelectLiquid, typeExpansion }) => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedLiquid, setSelectedLiquid] = useState(null);

    const handleSelectMaterial = (material) => {
        setSelectedMaterial(material);
        onSelectMaterial(material);
    }

    const handleSelectChange = (event) => {
        const selectedMaterialName = event.target.value;
        const selectedMaterial = materials.find(material => material.name === selectedMaterialName);
        setSelectedMaterial(selectedMaterial);
        onSelectMaterial(selectedMaterial);
    };

    const handleLiquidChange = (event) => {
        const selectedLiquidName = event.target.value;
        const selectedLiquid = liquids.find(liquid => liquid.name === selectedLiquidName);
        setSelectedLiquid(selectedLiquid);
        onSelectLiquid(selectedLiquid);
    };

    return (
        <div className="nav-expansion-picker elements-picker">
            <div className="material-list">
                <h3>Lista de materiales solidos:</h3>
                {materials.map((material, index) => (
                    <div
                        key={index}
                        className={`material ${selectedMaterial === material ? 'selected' : ''}`}
                        onClick={() => handleSelectMaterial(material)}>
                        {material.name}
                    </div>
                ))}
            </div>
            <div className="material-list-responsive">
                <h3>Lista de materiales solidos:</h3>
                <select onChange={handleSelectChange}>
                    <option value="">Seleccione un material</option>
                    {materials.map((material, index) => (
                        <option key={index} value={material.name}>
                            {material.name}
                        </option>
                    ))}
                </select>
            </div>
            {liquids.length !== 0 && typeExpansion === "COMPUESTOS" ? (
                <div className="material-list-responsive liquids-exception">
                    <h3>Lista de materiales liquidos:</h3>
                    <select onChange={handleLiquidChange}>
                        <option value="">Seleccione un material</option>
                        {liquids.map((liquid, index) => (
                            <option key={index} value={liquid.name}>
                                {liquid.name}
                            </option>
                        ))}
                    </select>
                </div>
            ) : null}
        </div>
    )
}

export default ElementsPicker;