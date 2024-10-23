import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset some default styles */
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${({ theme }) => theme.textColor};
    transition: background-color 0.3s, color 0.3s;
    height: 100vh;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%; 
    display: flex;
    flex-direction: column;
  }

  /* Global box-sizing for consistent layouts */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Reset margins for headings and lists */
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  ul, ol {
    margin: 0;
    padding-left: 1.5em;
  }

  /* Global link styling */
  a {
    color: ${({ theme }) => theme.linkColor};
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Focus outline for accessibility */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.focusColor};
    outline-offset: 2px;
  }

  /* Customize scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.scrollbarTrack};
  }

  /* Firefox scrollbar styles */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.scrollbarThumb} ${({ theme }) => theme.scrollbarTrack};
  }
`;

export default GlobalStyle;
