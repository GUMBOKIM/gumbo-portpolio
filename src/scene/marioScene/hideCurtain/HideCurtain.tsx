import React, {useEffect, useRef} from "react";
import useWindowResize from "../../../common/hook/useWindowResize";
import * as S from "../MarioScene.style";
import Curtain from "../../../canvas/object/Curtain";

const HideCurtain = () => {
    const windowSize = useWindowResize();
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
    }, [windowSize]);

    return (
        <S.ScreenSizeCanvas ref={canvasRef} style={{zIndex: 300}}/>
    );
};


export default HideCurtain;