import styled, {css} from "styled-components";

export const Retro0StepBox = styled.div<{ backgroundColor?: string; borderColor?: string; }>`
  box-sizing: border-box;
  padding: 0.5rem;
  text-align: center;
  white-space: nowrap;

  ${props => {
    const backgroundColor = props.backgroundColor ?? 'white';
    const borderColor = props.borderColor ?? 'black';
    return css`
      background-color: ${backgroundColor};
      border: 0.25rem ${borderColor} solid;
    `
  }};
`;

export const Retro2StepBox = styled.div<{ backgroundColor?: string; borderColor?: string; }>`
  box-sizing: border-box;
  margin: 0.5rem;
  padding: 0.2rem;
  text-align: center;
  white-space: nowrap;

  ${props => {
    const backgroundColor = props.backgroundColor ?? 'white';
    const borderColor = props.borderColor ?? 'black';
    return css`
      background-color: ${backgroundColor};
      box-shadow: 0.25rem 0 ${backgroundColor}, -0.25rem 0 ${backgroundColor}, 0 -0.25rem ${backgroundColor}, 0 0.25rem ${backgroundColor}, 0.5rem 0 ${borderColor}, -0.5rem 0 ${borderColor}, 0 -0.5rem ${borderColor}, 0 0.5rem ${borderColor}, 0 0 0 0.25rem ${borderColor};
    `
  }};
`;

export const RetroButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin: 0.25rem;
  padding: 0.1rem 0.1rem 0.35rem 0.35rem;
  box-sizing: content-box;

  box-shadow: 0.25rem 0 black, -0.25rem 0 black, 0 -0.25rem black, 0 0.25rem black;
  cursor: pointer;

  :enabled, :disabled {
    border-top: none;
    border-left: none;

    border-right: 0.25rem solid rgba(0, 0, 0, 0.25);
    border-bottom: 0.25rem solid rgba(0, 0, 0, 0.25);
  }

  :enabled:active {
    border-top: 0.25rem solid rgba(0, 0, 0, 0.25);
    border-left: 0.25rem solid rgba(0, 0, 0, 0.25);

    border-bottom-style: none;
    border-right-style: none;
  }

  :disabled {
    color: dimgrey;
    background-color: lightgrey;
  }
`

export const RetroScaleUpBox = styled(Retro2StepBox)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 200px;
  height: 100px;

  animation: sizeUp steps(5, start) 1s forwards;

  @keyframes sizeUp {
    0% {
      height: 0;
      width: 0;
    }
    100% {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

export const RetroModalBackGround = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: gray;
`


