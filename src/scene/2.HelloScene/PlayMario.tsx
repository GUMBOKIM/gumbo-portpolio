import Block from "../../canvas/object/Block";
import Mario from "../../canvas/object/Mario";
import Cloud from "../../canvas/object/Cloud";
import Ground from "../../canvas/object/Ground";
import React, {RefObject, useEffect, useRef} from "react";
import {isMobile} from "react-device-detect";
import * as S from "./HelloScene.style";

interface PlayMarioProps {
    moveNextScene: () => void;
}

const PlayMario = ({moveNextScene}: PlayMarioProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const leftTouchAreaRef = useRef<HTMLDivElement>(null);
    const centerTouchAreaRef = useRef<HTMLDivElement>(null);
    const rightTouchAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timer: NodeJS.Timer;
        const canvas = canvasRef.current;
        if (canvas) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            canvas.width = windowWidth;
            canvas.height = windowHeight;
            const context = canvas.getContext("2d");
            if (context) {
                const {block, ground, mario, cloud1, cloud2} = createCanvasObject(
                    windowHeight,
                    windowWidth,
                    context,
                    moveNextScene,
                );

                // 마리오 이벤트 등록
                addEventToMario(
                    mario,
                    leftTouchAreaRef,
                    centerTouchAreaRef,
                    rightTouchAreaRef
                );
                const drawCanvas = () => {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    // 이동
                    mario.locate();
                    // 충돌 체크
                    mario.checkCollision([block]);
                    // Object 그리기
                    [ground, cloud1, cloud2, mario, block].forEach((o) => o.draw());
                };
                timer = setInterval(drawCanvas, 1000 / 60);
            }
            return () => {
                clearInterval(timer);
            }
        }
    }, []);

    return (
        <>
            <S.MarioCanvas ref={canvasRef}/>
            {isMobile && (
                <S.TouchAreaContainer>
                    <S.TouchArea ref={leftTouchAreaRef}/>
                    <S.TouchArea ref={centerTouchAreaRef}/>
                    <S.TouchArea ref={rightTouchAreaRef}/>
                </S.TouchAreaContainer>
            )}
        </>
    );
};


const createCanvasObject = (
    windowHeight: number,
    windowWidth: number,
    context: CanvasRenderingContext2D,
    colludeEvent: () => void,
) => {
    // Object 크기 및 위치 지정
    const scale = Math.round(windowHeight / 16 / 12);
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;

    // Object 생성
    // 배경
    const ground = new Ground(
        centerX,
        centerY + scale * 16 * 2.5,
        scale,
        context
    );
    const cloud1 = new Cloud(
        centerX - scale * 16 * 5,
        centerY - scale * 16 * 4,
        scale,
        context
    );
    const cloud2 = new Cloud(
        centerX + scale * 16 * 2,
        centerY - scale * 16 * 5,
        scale,
        context
    );
    // 오브젝트
    const block = new Block(
        {x: centerX, y: centerY - scale * 16 * 0.5},
        scale,
        context,
        colludeEvent
    );

    const mario = new Mario(
        {x: centerX, y: centerY + scale * 16 * 2.5},
        scale,
        context
    );

    return {block, ground, mario, cloud1, cloud2};
};

const addEventToMario = (
    mario: Mario,
    leftTouchAreaRef: RefObject<HTMLDivElement>,
    centerTouchAreaRef: RefObject<HTMLDivElement>,
    rightTouchAreaRef: RefObject<HTMLDivElement>
) => {

    if (isMobile) {
        const leftTouchArea = leftTouchAreaRef.current;
        const centerTouchArea = centerTouchAreaRef.current;
        const rightTouchArea = rightTouchAreaRef.current;
        if (leftTouchArea && rightTouchArea && centerTouchArea) {
            leftTouchArea.addEventListener("touchstart", () =>
                mario.startInteraction("LEFT")
            );
            leftTouchArea.addEventListener("touchend", () =>
                mario.endInteraction("LEFT")
            );
            rightTouchArea.addEventListener("touchstart", () =>
                mario.startInteraction("RIGHT")
            );
            rightTouchArea.addEventListener("touchend", () =>
                mario.endInteraction("RIGHT")
            );
            centerTouchArea.addEventListener("touchstart", () =>
                mario.startInteraction("JUMP")
            );
            centerTouchArea.addEventListener("touchend", () =>
                mario.endInteraction("JUMP")
            );
        }
    }

    const marioKeyDown = (e: KeyboardEvent) =>
        mario.startInteraction(mario.detectKeyInput(e.code));
    const marioKeyUp = (e: KeyboardEvent) =>
        mario.endInteraction(mario.detectKeyInput(e.code));
    window.addEventListener("keydown", marioKeyDown);
    window.addEventListener("keyup", marioKeyUp);
    return () => {
        window.removeEventListener("keydown", marioKeyDown);
        window.removeEventListener("keyup", marioKeyUp);
    }
};

export default React.memo(PlayMario);