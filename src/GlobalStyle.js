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
    height: 100vh; /* Ensure body takes full viewport height */
    overflow: hidden; /* Prevent body overflow */
  }

  #root {
    height: 100%; /* Ensure root takes full height */
    display: flex;
    flex-direction: column;
  }

  /* Optional: Customize scrollbar for better aesthetics */
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
`;

export default GlobalStyle;