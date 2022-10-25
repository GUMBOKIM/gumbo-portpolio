import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  
  body {
    font-family: 'DungGeunMo';
    font-weight: 800;
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