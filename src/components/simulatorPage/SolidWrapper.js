import React, { useState, useEffect } from 'react'

const SolidWrapper = ({ texturePath, scaleX, calculatedScale }) => {
    const [animatedScale, setAnimatedScale] = useState(scaleX);
    const [prevScaleX, setPrevScaleX] = useState(scaleX);
    const [prevCalcScale, setPrevCalcScale] = useState(calculatedScale);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (scaleX !== prevScaleX) {
            setIsAnimating(false);
            setAnimatedScale(scaleX);
            setPrevScaleX(scaleX);
        } else if (calculatedScale !== prevCalcScale) {
            setIsAnimating(true);
            setAnimatedScale(calculatedScale);
            setPrevCalcScale(calculatedScale);
        }
    }, [scaleX, prevScaleX, calculatedScale, animatedScale, prevCalcScale]);


    const handleTransitionEnd = () => {
        setIsAnimating(false);
    };

    return (
        <div className="solid-wrapper">
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
                onTransitionEnd={handleTransitionEnd}
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
        </div>
    )
}

export default SolidWrapper