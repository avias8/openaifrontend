// src/components/TypingIndicator.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';

const TypingAnimation = keyframes`
  0% { opacity: 0.2; }
  20% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 5px;

  div {
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    animation: ${TypingAnimation} 1s infinite;
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }

  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const TypingIndicator = () => (
  <IndicatorContainer>
    <div></div>
    <div></div>
    <div></div>
  </IndicatorContainer>
);

export default React.memo(TypingIndicator);