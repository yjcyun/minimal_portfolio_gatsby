import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --accent: rgb(37 99 235);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: monospace;
    max-width: 48rem;
    margin: auto;
    padding: 3rem 1rem;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  h1 {
    letter-spacing: 0.075rem;
  }

  nav {
    letter-spacing: 0.05rem;
  }

  ul {
    list-style: none;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
  }

  .accent {
    color: var(--accent);
  }

  pre {
    line-height: 1.2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: auto;
    padding: 1.25rem;
    margin: 0;
    background-color: #fff;
  }
`;

export default GlobalStyle;