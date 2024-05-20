import React from 'react';

const SuperficialSVG = ({ isAnimating, texturePath, onTransitionEnd, animatedScale }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="url(#texture-pattern)"
            version="1.1"
            id="Capa_1"
            className="superficial-svg"
            viewBox="0 0 26.36 26.36"
            xmlSpace="preserve"
            style={{
                transform: `scale(${animatedScale}) translateY(-30px)`,
                transition: 'transform 0.5s ease-in-out, filter 0.5s ease-in-out'
            }}
            onTransitionEnd={onTransitionEnd}
        >
            <defs>
                <filter id="colorize">
                    <feColorMatrix
                        type="matrix"
                        values="2 0 0 0 0
                    0 0.8 0 0 0
                    0 0 0.8 0 0
                    0 0 0 1 0"
                    />
                </filter>
                <pattern
                    id="texture-pattern"
                    patternUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href={texturePath}
                        preserveAspectRatio="none"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                    />
                </pattern>
            </defs>
            <g>
                <path
                    d="M26.36,2v22.36c0,1.104-0.895,2.001-2,2.001H2c-1.104,0-2-0.896-2-2.001V2c0-1.104,0.896-2,2-2h22.36 C25.466,0,26.36,0.896,26.36,2z"
                    style={{
                        fill: isAnimating ? 'url(#texture-pattern)' : 'url(#texture-pattern)',
                        filter: isAnimating ? 'url(#colorize)' : 'none',
                    }}
                />
            </g>
        </svg>
    );
};

export default SuperficialSVG;
