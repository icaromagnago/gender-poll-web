import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    background-image: linear-gradient(to bottom, #ADD8E6 0%, #FFB6C1 100%);
  }
  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font: 14px 'Nerko One', cursive, sans-serif;
  }

  h1 {
    font: 14px 'Lobster', cursive, sans-serif;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;