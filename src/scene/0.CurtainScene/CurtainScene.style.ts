import styled, {css, keyframes} from "styled-components";

const CurtainAnimation = keyframes`
  0% {
    transform: translate3D(0, -100vh, 0);
  }
  33% {
    transform: translate3D(0, 0, 0);
  }
  66% {
    transform: translate3D(0, 0, 0);
  }
  100% {
    transform: translate3D(0, -100vh, 0);
  }
`;

export const CurtainCanvas = styled.canvas<{ isCurtainExist: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  background-color: black;
  ${p => p.isCurtainExist ? css`animation: ${CurtainAnimation} 3s linear forwards;` : css`visibility: hidden;`};
  z-index: 100;
`