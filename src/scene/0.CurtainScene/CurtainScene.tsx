import React, {useEffect, useRef, useState} from "react";
import * as S from "./CurtainScene.style";
import {CurtainStatus} from "./CurtainScene.style";
import Curtain from "../../canvas/object/Curtain";

const CurtainScene = () => {
    const [curtainStatus, setCurtainStatus] = useState<CurtainStatus>('DOWN');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (curtainStatus === 'DOWN') {
            setTimeout(() => setCurtainStatus('UP'), 2000);
        }
    }, [curtainStatus])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            canvas.width = windowWidth;
            canvas.height = windowHeight;
            const context = canvas.getContext("2d");
            if (context) {
                const scale = Math.round(windowHeight / 16 / 12);
                const curtain = new Curtain(scale, context);
                curtain.draw();
            }
        }
    }, []);

    return (
        <S.CurtainCanvas ref={canvasRef} curtainStatus={curtainStatus}/>
    );
};


export default CurtainScene;