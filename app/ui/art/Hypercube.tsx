"use client";
import React, { useState, useEffect } from 'react';

const Hypercube: React.FC = () => {
    const [angleXInner, setAngleXInner] = useState(0);
    const [angleYInner, setAngleYInner] = useState(0);
    const [angleXOuter, setAngleXOuter] = useState(0);
    const [angleYOuter, setAngleYOuter] = useState(0);
    const [textRotation, setTextRotation] = useState(0);

    useEffect(() => {
        const initialDelay = setTimeout(() => {
            setTextRotation((prevRotation) => (prevRotation + 180) % 360);

            const textRotationInterval = setInterval(() => {
                setTextRotation((prevRotation) => (prevRotation + 180) % 360);
            }, 2880); // 2.88 seconds

            return () => {
                clearInterval(textRotationInterval);
            };
        }, 1920); // Initial delay of 1.92 seconds

        return () => {
            clearTimeout(initialDelay);
        };
    }, []);

    useEffect(() => {
        const rotationInterval = setInterval(() => {
            setAngleXInner((prevAngle) => (prevAngle + 1) % 360);
            setAngleYInner((prevAngle) => (prevAngle + 1) % 360);
            setAngleXOuter((prevAngle) => (prevAngle - 1 + 360) % 360);
            setAngleYOuter((prevAngle) => (prevAngle - 1 + 360) % 360);
        }, 16); // Roughly 60fps

        return () => {
            clearInterval(rotationInterval);
        };
    }, []);

    return (
        <div className="cube-container">
            {/* Outer cube rotates in opposite direction */}
            <div
                className="outerCube"
                style={{
                    transform: `rotateX(${angleXOuter}deg) rotateY(${angleYOuter}deg)`
                }}
            >
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{transform:`rotate(${textRotation}deg)`}}>M.</p></div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>B</div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>C</div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>D</div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{transform:"rotate(-90deg)"}}>M.</p></div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{transform:"rotate(-90deg)"}}>M.</p></div>
            </div>

            {/* Inner cube rotates in 3D */}
            <div
                className="innerCube"
                style={{
                    transform: `rotateX(${angleXInner}deg) rotateY(${angleYInner}deg)`
                }}
            >
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background:"rgba(211, 250, 13, 0.958)"}}><p style={{color:"black",transform:`rotate(${textRotation}deg)`} }>E.</p></div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>2</div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>4</div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{transform:"rotate(-90deg)"}}>E.</p></div>
                <div className="face" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{transform:"rotate(-90deg)"}}>E.</p></div>
            </div>
        </div>
    );
};

export default Hypercube;