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
  gap: 6px; /* Reduced gap between dots */
  margin-top: 4px; /* Reduced margin-top */

  div {
    width: 8px; /* Adjusted size of dots */
    height: 8px; /* Adjusted size of dots */
    background-color: #667eea; /* Color of dots */
    border-radius: 50%;
    animation: ${TypingAnimation} 1.5s infinite; /* Animation duration */
  }

  div:nth-child(2) {
    animation-delay: 0.3s; /* Animation delay */
  }

  div:nth-child(3) {
    animation-delay: 0.6s; /* Animation delay */
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