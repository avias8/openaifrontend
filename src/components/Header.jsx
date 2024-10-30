// src/components/Header.jsx

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const StatusOrb = styled.a`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $status }) =>
    $status === 'online' ? '#28a745' :
    $status === 'offline' ? '#dc3545' : '#ffc107'};
  box-shadow: ${({ $status }) =>
    $status === 'online' ? '0 0 8px rgba(40, 167, 69, 0.6)' :
    $status === 'offline' ? '0 0 8px rgba(220, 53, 69, 0.6)' :
    '0 0 8px rgba(255, 193, 7, 0.6)'};
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-right: 5px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  flex-grow: 1;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ThemeToggle = styled.button.attrs({
  'aria-label': 'Toggle theme',
})`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  transition: color 0.3s;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Header = ({ apiStatus, toggleTheme, currentTheme }) => (
  <HeaderContainer>
    <StatusOrb
      href="https://console.cloud.google.com/run/detail/us-central1/chatgpt-express-server/metrics?project=chatgpt-express-server-project"
      target="_blank"
      rel="noopener noreferrer"
      $status={apiStatus}
      title="API Status"
    />
    <Title>Chat with my Inference API</Title>
    <ThemeToggle onClick={toggleTheme}>
      {currentTheme === 'dark' ? '🌞' : '🌜'}
    </ThemeToggle>
  </HeaderContainer>
);

export default React.memo(Header);