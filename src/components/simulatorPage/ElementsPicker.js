import React, { useState } from 'react';

const ElementsPicker = ({ materials, onSelectMaterial }) => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);

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

    return (
        <div className="nav-expansion-picker elements-picker">
            <div className="material-list">
            <h2>Lista de materiales:</h2>
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
                <h2>Lista de materiales:</h2>
                <select onChange={handleSelectChange}>
                    <option value="">Seleccione un material</option>
                    {materials.map((material, index) => (
                        <option key={index} value={material.name}>
                            {material.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ElementsPicker