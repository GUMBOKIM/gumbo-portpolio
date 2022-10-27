import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'PressStart2P';
  }

  @font-face {
    font-family: "DungGeunMo";
    src: url('./font/DungGeunMo.woff');
  }

  @font-face {
    font-family: "PressStart2P";
    src: url('./font/PressStart2P-vaV7.woff');
  }
`;

export default GlobalStyle;
