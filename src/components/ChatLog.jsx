// src/components/ChatLog.jsx

import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatLogContainer = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px; /* Reduced padding */
  border-radius: 15px;
  overflow-y: auto;
  margin-bottom: 20px;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    height: 250px;
  }

  transition: background 0.3s;
`;

const ChatLog = ({ chatLog, theme }) => (
  <ChatLogContainer>
    {chatLog.map((message, index) => (
      <Message key={index} message={message} theme={theme} />
    ))}
  </ChatLogContainer>
);

export default React.memo(ChatLog);
