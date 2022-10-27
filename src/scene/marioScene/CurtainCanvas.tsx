import React, {useEffect, useRef} from "react";
import * as S from "./MarioScene.style";
import Curtain from "../../canvas/object/Curtain";
import {isMobile} from "react-device-detect";
import audioPlayer from "../../common/audio/AudioPlayer";

export type CurtainStatus = 'INIT' | 'UP' | 'DOWN';

interface CurtainCanvasProps {
    curtainStatus: CurtainStatus;
    openCurtain: () => void;
}

const CurtainCanvas = ({curtainStatus, openCurtain}: CurtainCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
                const handleCurtain = () => {
                    openCurtain();
                    audioPlayer.play('overworld');
                }
                canvas.addEventListener('click', handleCurtain);
                if (isMobile) canvas.addEventListener('touchend', handleCurtain);
            }
        }
    }, []);

    return (
        <S.CurtainCanvas ref={canvasRef} curtainStatus={curtainStatus}/>
    );
};


export default CurtainCanvas;