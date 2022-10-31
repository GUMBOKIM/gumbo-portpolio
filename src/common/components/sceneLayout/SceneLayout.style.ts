import styled, {css} from "styled-components";
import {RetroButton} from "../8BitComponent";

export const SceneContainer = styled.section<{ isFullSize: boolean }>`
  position: relative;

  height: 100%;
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${p => {
    if (!p.isFullSize) return css`max-width: 800px`
  }};

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