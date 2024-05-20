import React, { useState, useEffect } from 'react'
import CylinderSVG from './CylinderSVG';
import SuperficialSVG from './SuperficialSVG';
import DiceSVG from './DiceSVG';

const SolidWrapper = ({ typeExpansion, texturePath, scaleX, calculatedScale }) => {
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
            {typeExpansion === "LINEAR" && (
                <CylinderSVG
                    animatedScale={animatedScale}
                    isAnimating={isAnimating}
                    texturePath={texturePath}
                    onTransitionEnd={handleTransitionEnd}
                />
            )}
            {typeExpansion === "SUPERFICIAL" && (
                <SuperficialSVG
                    animatedScale={animatedScale}
                    isAnimating={isAnimating}
                    texturePath={texturePath}
                    onTransitionEnd={handleTransitionEnd}
                />
            )}
            {typeExpansion === "VOLUMETRIC" && (
                <DiceSVG
                    animatedScale={animatedScale}
                    isAnimating={isAnimating}
                    texturePath={texturePath}
                    onTransitionEnd={handleTransitionEnd}
                />
            )}
        </div>
    );
};
export default SolidWrapper