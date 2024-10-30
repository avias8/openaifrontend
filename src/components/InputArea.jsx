import React from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa'; // Importing an icon for the send button

// Styled Components
const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 15px;
  border-radius: 12px;
  background: ${({ theme }) => theme.inputContainerBackground}; /* New background color for the input area */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px 0; /* Additional spacing for the container */
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
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, box-shadow 0.3s, color 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
    opacity: 1; /* Ensure placeholder is fully opaque */
  }

  &:focus {
    background: ${({ theme }) => theme.inputFocusBackground};
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.15);
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
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.sendButtonBackground};
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, border 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Adding a subtle border */
  border: 2px solid transparent; /* Start with a transparent border */
  
  /* Change border color on hover */
  &:hover {
    background: ${({ theme }) => theme.sendButtonHoverBackground};
    border-color: ${({ theme }) => theme.borderHoverColor}; /* Custom border color on hover */
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
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
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
      <SendButton onClick={handleClick}>
        <FaPaperPlane /> {/* Send icon */}
      </SendButton>
    </InputContainer>
  );
};

export default React.memo(InputArea);
