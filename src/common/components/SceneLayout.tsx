import styled, {css} from "styled-components";
import {RetroButton} from "./8BitComponent";
import React, {ReactNode} from "react";
import {isMobile} from "react-device-detect";

export const SceneContainer = styled.div<{ isFullSize: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
  ${p => {
    if (!p.isFullSize) return css`max-width: 800px`
  }};
  overflow: hidden;

  z-index: 10;
`;

const PrevButton = styled(RetroButton)`
  position: absolute;
  left: 5vh;
  bottom: 5vh;

  width: 4vh;
  height: 4vh;

  background-color: red;

  z-index: 20;
`

const NextButton = styled(RetroButton)`
  position: absolute;
  right: 5vh;
  bottom: 5vh;

  width: 4vh;
  height: 4vh;

  background-color: blue;

  z-index: 20;
`

interface LayoutProps {
    isSceneFullSize: boolean;
    isExistPrevButton?: boolean;
    isExistNextButton?: boolean;
    prevButtonEvent?: () => void;
    nextButtonEvent?: () => void;
    children?: ReactNode;
}


const SceneLayout = (props: LayoutProps) => {
    const {
        isSceneFullSize,
        isExistPrevButton,
        isExistNextButton,
        prevButtonEvent,
        nextButtonEvent,
        children
    } = props;

    const handlePrevButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
        if (prevButtonEvent) prevButtonEvent();
        e.currentTarget.disabled = true;
    }

    const handleNextButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.TouchEvent<HTMLButtonElement>) => {
        if (nextButtonEvent) nextButtonEvent();
        e.currentTarget.disabled = true;
    }

    if (isMobile) {
        return (
            <SceneContainer isFullSize>
                {children}
                {isExistPrevButton && <PrevButton onTouchEnd={handlePrevButton}>{'<'}</PrevButton>}
                {isExistNextButton && <NextButton onTouchEnd={handleNextButton}>{'>'}</NextButton>}
            </SceneContainer>
        )
    }

    return (
        <SceneContainer isFullSize={isSceneFullSize}>
            {children}
            {isExistPrevButton && <PrevButton onClick={handlePrevButton}>{'<'}</PrevButton>}
            {isExistNextButton && <NextButton onClick={handleNextButton}>{'>'}</NextButton>}
        </SceneContainer>
    )
}

export default SceneLayout;