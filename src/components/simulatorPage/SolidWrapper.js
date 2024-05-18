import React from 'react'

const SolidWrapper = ({texturePath, scaleX}) => {
    return (
        <div className="solid-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" className='cylinder-svg' style={{ transform: `scaleX(${scaleX}) rotate(90deg)` }}>
                <defs>
                    <pattern id="texture-pattern" patternUnits="objectBoundingBox" width="1" height="1">
                        <image href={texturePath} preserveAspectRatio="none" x="0" y="0" width="100%" height="100%" />
                    </pattern>
                </defs>
                <rect x="103.804" y="56.073" style={{ fill: "url(#texture-pattern)" }} width="304.4" height="399.854" />
                <ellipse style={{ fill: "url(#texture-pattern)" }} cx="255.996" cy="56.073" rx="152.2" ry="56.073" />
                <ellipse style={{ fill: "url(#texture-pattern)", stroke: "black" }} cx="255.996" cy="455.927" rx="152.2" ry="56.073" />
            </svg>
        </div>
    )
}

export default SolidWrapper