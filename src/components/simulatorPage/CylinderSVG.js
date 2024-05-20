
import React from 'react';

const CylinderSVG = ({ animatedScale, isAnimating, texturePath, onTransitionEnd }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            className='cylinder-svg'
            style={{
                transform: `scaleX(${animatedScale}) rotate(90deg)`,
                transition: 'transform 0.5s ease-in-out, filter 0.5s ease-in-out'
            }}
            onTransitionEnd={onTransitionEnd}
        >
            <defs>
                <filter id="colorize">
                    <feColorMatrix type="matrix" values="2 0 0 0 0
                                                            0 0.8 0 0 0
                                                            0 0 0.8 0 0
                                                            0 0 0 1 0" />
                </filter>
                <pattern id="texture-pattern" patternUnits="objectBoundingBox" width="1" height="1">
                    <image href={texturePath} preserveAspectRatio="none" x="0" y="0" width="100%" height="100%" />
                </pattern>
            </defs>
            <rect
                x="103.804"
                y="56.073"
                style={{
                    fill: isAnimating ? 'url(#texture-pattern)' : 'url(#texture-pattern)',
                    filter: isAnimating ? 'url(#colorize)' : 'none',
                    transition: 'fill 0.5s ease-in-out, filter 0.5s ease-in-out'
                }}
                width="304.4"
                height="399.854"
            />
            <ellipse
                style={{
                    fill: isAnimating ? 'url(#texture-pattern)' : 'url(#texture-pattern)',
                    filter: isAnimating ? 'url(#colorize)' : 'none',
                    transition: 'fill 0.5s ease-in-out, filter 0.5s ease-in-out'
                }}
                cx="255.996"
                cy="56.073"
                rx="152.2"
                ry="56.073"
            />
            <ellipse
                style={{
                    fill: isAnimating ? 'url(#texture-pattern)' : 'url(#texture-pattern)',
                    stroke: "black",
                    filter: isAnimating ? 'url(#colorize)' : 'none',
                    transition: 'fill 0.5s ease-in-out, filter 0.5s ease-in-out'
                }}
                cx="255.996"
                cy="455.927"
                rx="152.2"
                ry="56.073"
            />
        </svg>

    );
};

export default CylinderSVG;
