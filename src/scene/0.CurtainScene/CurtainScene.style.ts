import styled, {css, keyframes} from "styled-components";

export type CurtainStatus = 'UP' | 'DOWN';

export const CurtainCanvas = styled.canvas<{ curtainStatus: CurtainStatus }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  ${p => {
    switch (p.curtainStatus) {
      case 'UP':
        return css`animation: ${CurtainUp} 1s linear forwards`;
      case 'DOWN' :
        return css`animation: ${CurtainDown} 1s linear forwards`;
      default:
        return;
    }
  }}

  z-index: 100;
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