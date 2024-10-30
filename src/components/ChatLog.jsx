// src/components/ChatLog.jsx

import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const ChatLogContainer = styled.div`
  flex: 1;
  width: 100%; /* Ensure full width of parent container */
  max-width: 100%; /* Prevent overflow beyond parent width */
  background: rgba(255, 255, 255, 0.05);
  padding: 15px; /* Adjusted padding for spacing */
  box-sizing: border-box; /* Include padding in width/height calculation */
  border-radius: 15px;
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal overflow */
  margin: 5px auto; /* Remove bottom margin to fit parent width */
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.3);
  max-height: calc(100vh - 160px); /* Set maximum height to fit within the viewport */

  @media (max-width: 600px) {
    height: 250px;
  }

  transition: background 0.3s;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarThumb}; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Rounded corners for the scrollbar thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.scrollbarTrack}; /* Color of the scrollbar track */
  }
`;

const ChatLog = ({ chatLog, theme, chatEndRef }) => ( // Accept chatEndRef as a prop
  <ChatLogContainer>
    {chatLog.map((message, index) => (
      <Message key={index} message={message} theme={theme} />
    ))}
    <div ref={chatEndRef} /> {/* For auto-scrolling */}
  </ChatLogContainer>
);

export default React.memo(ChatLog);
