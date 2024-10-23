// src/GlobalStyle.js

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
  }

  /* Optional: Customize scrollbar for better aesthetics */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.inputBackground};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.messageUser};
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.inputBackground};
  }
`;

export default GlobalStyle;
