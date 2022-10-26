import React, {useEffect, useRef} from "react";
import Mario from "../../canvas/object/Mario";
import Block from "../../canvas/object/Block";
import useWindowResize from "../../common/hook/useWindowResize";
import styled from "styled-components";
import Ground from "../../canvas/object/Ground";
import Cloud from "../../canvas/object/Cloud";

const MarioWordContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-grow: 1;
`

const ScreenSizeCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;

  padding: 0;
  margin: 0;

  background-color: #5C94FC;
  z-index: 900;
`

const TouchArea = styled.div`
  width: inherit;
  height: 100%;
  z-index: 1000;
`

const LandingPage: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const leftTouchAreaRef = useRef<HTMLDivElement>(null);
    const centerTouchAreaRef = useRef<HTMLDivElement>(null);
    const rightTouchAreaRef = useRef<HTMLDivElement>(null);

    const windowSize = useWindowResize();

    useEffect(() => {
        const canvas = canvasRef.current;
        const leftTouchArea = leftTouchAreaRef.current;
        const centerTouchArea = centerTouchAreaRef.current;
        const rightTouchArea = rightTouchAreaRef.current;
        if (canvas && leftTouchArea && centerTouchArea && rightTouchArea) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            canvas.width = windowWidth;
            canvas.height = windowHeight;
            const context = canvas.getContext('2d');
            if (context) {
                // Object 크기 및 위치 지정
                const scale = Math.round(windowHeight / 16 / 12);
                const centerX = windowWidth / 2;
                const centerY = windowHeight / 2;

                // Object 생성
                const block = new Block({x: centerX, y: centerY - scale * 16 * 1.5}, scale, context);
                const ground = new Ground(centerX, centerY + scale * 16 * 1.5, scale, context);
                const mario = new Mario({x: centerX, y: centerY + scale * 16 * 1.5}, scale, context);
                const cloud1 = new Cloud(centerX - scale * 16 * 5, centerY - scale * 16 * 4, scale, context);
                const cloud2 = new Cloud(centerX + scale * 16 * 2, centerY - scale * 16 * 5, scale, context);

                // 이벤트 등록
                const marioKeyDown = (e: KeyboardEvent) => mario.startInteraction(mario.detectKeyInput(e.code));
                const marioKeyUp = (e: KeyboardEvent) => mario.endInteraction(mario.detectKeyInput(e.code));
                window.addEventListener('keydown', marioKeyDown);
                window.addEventListener('keyup', marioKeyUp);

                leftTouchArea.addEventListener('touchstart', () => mario.startInteraction('LEFT'));
                leftTouchArea.addEventListener('touchend', () => mario.endInteraction('LEFT'));
                rightTouchArea.addEventListener('touchstart', () => mario.startInteraction('RIGHT'));
                rightTouchArea.addEventListener('touchend', () => mario.endInteraction('RIGHT'));
                centerTouchArea.addEventListener('touchstart', () => mario.startInteraction('JUMP'));
                centerTouchArea.addEventListener('touchend', () => mario.endInteraction('JUMP'));
                const drawCanvas = () => {
                    requestAnimationFrame(drawCanvas);
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    // 이동
                    mario.locate();

                    // 충돌 체크
                    mario.checkCollision([block]);

                    // Object 그리기
                    ground.draw();
                    cloud1.draw();
                    cloud2.draw();

                    mario.draw();
                    block.draw();

                }
                drawCanvas();
            }
        }
    }, [windowSize]);

    return (
        <MarioWordContainer>
            <ScreenSizeCanvas ref={canvasRef}/>
            <TouchArea ref={leftTouchAreaRef}>
                Hello
            </TouchArea>
            <TouchArea ref={centerTouchAreaRef}/>
            <TouchArea ref={rightTouchAreaRef}/>
        </MarioWordContainer>
    )
}

export default LandingPage;