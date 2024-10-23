// src/components/CodeBlock.jsx

import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaClipboard } from 'react-icons/fa';

const CodeContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.inputBackground};
  padding: 10px;
  border-radius: 5px;
  overflow: auto;
  font-family: 'Source Code Pro', monospace;
  color: inherit;
  margin: 10px 0;
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
      <pre>{code}</pre>
    </CodeContainer>
  );
};

export default CodeBlock;