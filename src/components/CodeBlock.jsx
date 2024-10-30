import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaClipboard } from 'react-icons/fa';

const CodeContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.inputBackground};
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const PreformattedText = styled.pre`
  overflow-x: auto; /* Ensures horizontal scrolling */
  white-space: nowrap; /* Prevents wrapping */
  font-family: 'Source Code Pro', monospace;
  background-color: ${({ theme }) => theme.inputBackground};
  padding: 10px;
  border-radius: 5px;

  /* Custom white scrollbar styles */
  &::-webkit-scrollbar {
    height: 8px; /* Horizontal scrollbar height */
  }

  &::-webkit-scrollbar-thumb {
    background-color: white; /* White scrollbar thumb */
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.inputBackground}; /* Same background as code */
  }
`;

const CodeText = styled.code`
  white-space: nowrap; /* Ensures no wrapping in code */
  display: inline-block; /* Required to respect white-space and overflow */
`;

const CopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    color: ${({ theme }) => theme.messageUser};
  }
`;

const CodeBlock = ({ code }) => {
  return (
    <CodeContainer>
      <CopyToClipboard text={code}>
        <CopyButton aria-label="Copy to clipboard">
          <FaClipboard />
        </CopyButton>
      </CopyToClipboard>
      <PreformattedText>
        <CodeText>{code}</CodeText>
      </PreformattedText>
    </CodeContainer>
  );
};

export default CodeBlock;
