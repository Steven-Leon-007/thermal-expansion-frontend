import React, { useState } from 'react';

const ElementsPicker = ({ materials, onSelectMaterial }) => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    const handleSelectMaterial = (material) => {
        setSelectedMaterial(material);
        onSelectMaterial(material);
    }

    return (
        <div className="nav-expansion-picker">
            <h2>Lista de materiales:</h2>
            <div className="material-list">
                {materials.map((material, index) => (
                    <div
                        key={index}
                        className={`material ${selectedMaterial === material ? 'selected' : ''}`}
                        onClick={() => handleSelectMaterial(material)}>
                        {material.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ElementsPicker