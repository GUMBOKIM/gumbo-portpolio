import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'PressStart2P';
  }

  @font-face {
    font-family: "DungGeunMo";
    font-display: block;
    src: url('./font/DungGeunMo.woff');
  }

  @font-face {
    font-family: "PressStart2P";
    font-display: block;
    src: url('./font/PressStart2P-vaV7.woff');
  }
`;

export default GlobalStyle;
