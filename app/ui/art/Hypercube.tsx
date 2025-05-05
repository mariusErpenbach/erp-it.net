"use client";
import React, { useState, useEffect } from 'react';
import styles from './_Hypercube.module.scss';
import { transform } from 'next/dist/build/swc/generated-native';

const Hypercube: React.FC = () => {
    const [angleXInner, setAngleXInner] = useState(0);
    const [angleYInner, setAngleYInner] = useState(0);
    const [angleXOuter, setAngleXOuter] = useState(0);
    const [angleYOuter, setAngleYOuter] = useState(0);
    const [textRotation, setTextRotation] = useState(0);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [elapsedTime, setElapsedTime] = useState(0);

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
    useEffect(() => {
        const start = performance.now();
        setStartTime(start);

        const timerInterval = setInterval(() => {
            setElapsedTime(performance.now() - start);
        }, 16); // Update every frame

        return () => {
            clearInterval(timerInterval);
        };
    }, []);

    return (
        <div className={styles.container}>
            {/* Outer cube rotates in opposite direction */}
            <div
                className={styles.outerCube}
                style={{
                    transform: `rotateX(${angleXOuter}deg) rotateY(${angleYOuter}deg)`
                }}
            >
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{transform:`rotate(${textRotation}deg)`}}>1R</p></div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>B</div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>C</div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>D</div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{transform:"rotate(-90deg)"}}>6</p></div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{transform:"rotate(-90deg)"}}>F</p></div>
            </div>

            {/* Inner cube rotates in 3D */}
            <div
                className={styles.innerCube}
                style={{
                    transform: `rotateX(${angleXInner}deg) rotateY(${angleYInner}deg)`
                }}
            >
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{transform:`rotate(${textRotation}deg)`}}>1R</p></div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>2</div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>4</div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{transform:"rotate(-90deg)"}}>F</p></div>
                <div className={styles.face} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{transform:"rotate(-90deg)"}}>6</p></div>
            </div>
            <div id="stopwatch" style={{position:"absolute", bottom:"0"}}>{elapsedTime}</div>
        </div>
    );
};

export default Hypercube;