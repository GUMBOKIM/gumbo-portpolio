import styled from "styled-components";

export const MarioSceneContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-grow: 1;
`;

export const ScreenSizeCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

export const TouchArea = styled.div`
  width: inherit;
  height: 100%;
  z-index: 1000;
`;
