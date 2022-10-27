import styled, {css, keyframes} from "styled-components";
import {CurtainStatus} from "./CurtainCanvas";

export const ScreenSizeCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;

  z-index: 200;
`;

export const TouchAreaContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-grow: 1;
  z-index: 201;
`;

export const TouchArea = styled.div`
  width: inherit;
  height: 100%;
`;


export const CurtainCanvas = styled(ScreenSizeCanvas)<{ curtainStatus: CurtainStatus }>`
  z-index: 300;

  ${p => {
    switch (p.curtainStatus) {
      case 'UP':
        return css`animation: ${CurtainUp} 2s linear forwards`;
      case 'DOWN' :
        return css`animation: ${CurtainDown} 2s linear forwards`;
      default:
        return;
    }
  }}
`

const CurtainUp = keyframes`
  0% {
    transform: translate3D(0, 0, 0);
  }
  100% {
    transform: translate3D(0, -100%, 0);
  }
`;

const CurtainDown = keyframes`
  0% {
    transform: translate3D(0, -100%, 0);
  }
  100% {
    transform: translate3D(0, 0, 0);
  }
`;