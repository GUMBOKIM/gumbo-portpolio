import styled, {css} from "styled-components";
import {RetroButton} from "../8BitComponent";

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

export const PrevButton = styled(RetroButton)`
  position: absolute;
  left: 5vh;
  bottom: 5vh;

  width: 4vh;
  height: 4vh;

  background-color: red;

  z-index: 90;
`

export const NextButton = styled(RetroButton)`
  position: absolute;
  right: 5vh;
  bottom: 5vh;

  width: 4vh;
  height: 4vh;

  background-color: blue;

  z-index: 90;
`