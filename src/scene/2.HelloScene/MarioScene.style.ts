import styled from "styled-components";

export const TouchAreaContainer = styled.div`
  position: fixed;
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