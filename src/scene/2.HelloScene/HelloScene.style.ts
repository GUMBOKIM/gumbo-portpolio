import styled, {keyframes} from "styled-components";
import {Retro2StepBox} from "../../common/components/8BitComponent";

const upDownMotion = keyframes`
  0% {
    transform: translate3Y(20%);
  }
  25% {
    transform: translate3Y(0);
  }
  50% {
    transform: translateY(20%);
  }
  100% {
    transform: translate3Y(0);
  }
`

export const GreetingBox = styled(Retro2StepBox)`
  position: absolute;
  top: 15%;

  font-size: min(1rem, 5vw);

  animation: ${upDownMotion} 2s infinite linear;
`;


const flickerFont = keyframes`
  0% {
    opacity: 80%;
  }
  50% {
    opacity: 40%;
  }
  100% {
    opacity: 80%;
  }
`


export const ExplainBox = styled.div`
  position: absolute;
  top: 40%;

  text-align: center;
  font-size: min(0.8rem, 4vw);
  color: gold;

  animation: ${flickerFont} 2s infinite linear;
`;

export const MarioCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const TouchAreaContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-grow: 1;
  z-index: 80;
`;

export const TouchArea = styled.div`
  width: inherit;
  height: 100%;
`;