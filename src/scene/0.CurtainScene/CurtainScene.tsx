import React, {useEffect, useRef} from "react";
import * as S from "./CurtainScene.style";
import Curtain from "../../canvas/object/Curtain";

interface CurtainSceneProps {
    isExistCurtain: boolean
}

const CurtainScene = ({isExistCurtain}: CurtainSceneProps) => {
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
            }
        }
    }, []);

    return (
        <S.CurtainCanvas isCurtainExist={isExistCurtain} ref={canvasRef}/>
    );
};


export default CurtainScene;