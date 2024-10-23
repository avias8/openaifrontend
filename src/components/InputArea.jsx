// src/components/InputArea.jsx

import React from 'react';
import styled from 'styled-components';

// Styled Components
const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TextArea = styled.textarea.attrs({
  'aria-label': 'Type your message',
})`
  flex: 1;
  padding: 15px 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.inputBackground};
  border: none;
  color: ${({ theme }) => theme.textColor};
  resize: none;
  font-size: 1rem;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
  transition: background 0.3s, box-shadow 0.3s, color 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
    opacity: 1; /* Ensure placeholder is fully opaque */
  }

  &:focus {
    background: ${({ theme }) => theme.inputFocusBackground};
    box-shadow: inset 0 4px 10px
      ${({ theme }) =>
        theme.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.7)'
          : 'rgba(0, 0, 0, 0.3)'};
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    font-size: 0.9rem;
  }
`;

const SendButton = styled.button.attrs({
  'aria-label': 'Send message',
})`
  padding: 15px 25px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.sendButtonBackground};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.sendButtonHoverBackground};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.messageUser};
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
`;

const InputArea = ({ prompt, setPrompt, handleGenerateText }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerateText();
      setPrompt(''); // Clear the text box
    }
  };

  const handleClick = () => {
    handleGenerateText();
    setPrompt(''); // Clear the text box
  };

  return (
    <InputContainer>
      <TextArea
        placeholder="Type your message..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyPress={handleKeyPress} // Handle Enter key press
        rows={2}
      />
      <SendButton onClick={handleClick}>Send</SendButton>
    </InputContainer>
  );
};

export default React.memo(InputArea);