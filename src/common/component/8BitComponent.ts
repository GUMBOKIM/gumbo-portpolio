import styled, {css} from "styled-components";

export const RetroDiv = styled.div<{ backgroundColor?: string; borderColor?: string; }>`
  padding: 0.2rem 0.4rem;
  text-align: center;

  ${props => {
    const backgroundColor = props.backgroundColor ?? 'white';
    const borderColor = props.borderColor ?? 'black';
    return css`
      background-color: ${backgroundColor};
      box-shadow: 0.25rem 0 ${backgroundColor}, -0.25rem 0 ${backgroundColor}, 0 -0.25rem ${backgroundColor}, 0 0.25rem ${backgroundColor}, 0.5rem 0 ${borderColor}, -0.5rem 0 ${borderColor}, 0 -0.5rem ${borderColor}, 0 0.5rem ${borderColor}, 0 0 0 0.25rem ${borderColor};
    `
  }};
`;