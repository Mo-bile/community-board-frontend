import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #f4f4f4;
    --text-color: #333;
    --border-color: #ddd;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

