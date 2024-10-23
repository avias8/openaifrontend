import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUserCircle, FaRobot } from 'react-icons/fa'; // Import FaCog for system messages
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock'; // Import your CodeBlock component
import TypingIndicator from './TypingIndicator'; // Import the TypingIndicator component

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  max-width: ${({ $sender }) => ($sender === 'user' ? '100%' : '80%')};
  flex-direction: ${({ $sender }) => ($sender === 'user' ? 'row-reverse' : 'row')};
  align-self: ${({ $sender }) => ($sender === 'user' ? 'flex-end' : 'flex-start')};

  @media (max-width: 600px) {
    max-width: ${({ $sender }) => ($sender === 'user' ? '95%' : '90%')};
  }
`;

const Avatar = styled.div`
  margin-right: ${({ $sender }) => ($sender === 'user' ? '0' : '8px')};
  margin-left: ${({ $sender }) => ($sender === 'user' ? '8px' : '0')};
  display: flex;
  align-items: center;

  img {
    width: ${({ $sender }) => ($sender === 'system' ? '48px' : '24px')};
    height: ${({ $sender }) => ($sender === 'system' ? '48px' : '24px')};
    border-radius: 50%;
  }
`;

const MessageBubble = styled.div`
  padding: 10px 15px;
  border-radius: 20px;
  background: ${({ $sender, theme }) =>
    $sender === 'user'
      ? theme.messageUser
      : $sender === 'openai'
      ? theme.messageOpenAI
      : $sender === 'system'
      ? 'green' // Set system message bubble to green
      : theme.messageError};
  color: ${({ theme }) => theme.textColor}; /* Dynamic text color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-out;
  transition: background 0.3s, color 0.3s;
  word-wrap: break-word;
  flex: 1;
  font-size: ${({ $sender }) => ($sender === 'system' ? '0.8em' : '1em')}; /* Smaller text for system messages */
  white-space: pre-wrap; /* Preserve whitespace and line breaks */

  h1, h2, h3, h4, h5, h6 {
    margin: 5px 0; /* Reduced margin for headers */
  }

  p {
    margin: 5px 0; /* Reduced margin for paragraphs */
  }

  ul, ol {
    padding-left: 15px; /* Slightly reduced padding for lists */
    margin: 5px 0; /* Reduced margin for list items */
  }

  strong {
    font-weight: bold;
  }

  code {
    background-color: rgba(27,31,35,0.05);
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 3px;
    font-family: 'Source Code Pro', monospace;
    color: inherit;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
`;

const Timestamp = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #ccc;
  margin-top: 5px;
  text-align: ${({ $sender }) => ($sender === 'user' ? 'right' : 'left')};
`;

const Message = ({ message }) => {
  const { sender, text, timestamp } = message;

  return (
    <MessageContainer $sender={sender}>
      <Avatar $sender={sender}>
        {sender === 'openai' && (
          <FaRobot
            size={24}
            color={sender === 'error' ? '#dc3545' : undefined} // Error messages have red icons
          />
        )}
        {sender === 'user' && (
          <FaUserCircle size={24} />
        )}
        {sender === 'system' && (
          <img src="https://avivarma.ca/images/avivarma.jpeg" alt="Avi" />
        )}
        {sender === 'error' && (
          <FaRobot size={24} color="#dc3545" />
        )}
      </Avatar>
      <div>
        <MessageBubble $sender={sender}>
          {sender === 'openai' && text === 'Typing...' ? (
            <TypingIndicator />
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <CodeBlock code={String(children).replace(/\n$/, '')} />
                  ) : (
                    <code
                      className={className}
                      style={{
                        backgroundColor: 'rgba(27,31,35,0.05)',
                        padding: '0.2em 0.4em',
                        borderRadius: '3px',
                        fontFamily: 'Source Code Pro, monospace',
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                a: ({ node, href, children, ...props }) => (
                  <a
                    href={href}
                    style={{ color: '#667eea', textDecoration: 'underline' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={children && children.length > 0 ? (typeof children[0] === 'string' ? children[0] : 'Link') : 'Link'}
                    {...props}
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {text}
            </ReactMarkdown>
          )}
        </MessageBubble>
        <Timestamp $sender={sender}>
          {text === 'Typing...' ? 'Typing...' : timestamp}
        </Timestamp>
      </div>
    </MessageContainer>
  );
};

export default React.memo(Message);
