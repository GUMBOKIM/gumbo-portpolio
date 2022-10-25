import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Mario from "../../canvas/object/Mario";
import Block from "../../canvas/object/Block";

const LandingPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const context = canvas.getContext('2d');
            if (context) {
                const block = new Block({x: 200, y: 100}, 4, context);
                const mario = new Mario({x: 200 , y: 300}, 4, context);
                const marioKeyDown = (e: KeyboardEvent) => mario.keyDown(e.code);
                const marioKeyUp = (e: KeyboardEvent) => mario.keyUp(e.code);
                window.addEventListener('keydown', marioKeyDown);
                window.addEventListener('keyup', marioKeyUp);
                const drawCanvas = () => {
                    requestAnimationFrame(drawCanvas);
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    mario.locate();
                    mario.checkCollision([block]);
                    mario.draw();
                    block.draw();
                }
                drawCanvas();
            }
        }
    }, [])

    return (
        <ViewPortCanvas ref={canvasRef}/>
    )
}

const ViewPortCanvas = styled.canvas`
`

export default LandingPage;