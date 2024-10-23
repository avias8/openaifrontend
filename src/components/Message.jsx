// src/components/Message.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaUserCircle, FaRobot, FaCog } from 'react-icons/fa'; // Import FaCog for system messages
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TypingIndicator from './TypingIndicator'; // Import the TypingIndicator component

// Register JavaScript language for syntax highlighting
SyntaxHighlighter.registerLanguage('javascript', js);

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
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const MessageBubble = styled.div`
  padding: 12px 20px;
  border-radius: 20px;
  background: ${({ $sender, theme }) =>
    $sender === 'user'
      ? theme.messageUser
      : $sender === 'openai'
      ? theme.messageOpenAI
      : theme.messageError};
  color: ${({ theme }) => theme.textColor}; /* Dynamic text color */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.3s ease-out;
  transition: background 0.3s, color 0.3s;
  word-wrap: break-word;
  flex: 1;

  /* Optional: Style Markdown elements */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    padding-left: 20px;
    margin: 5px 0;
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
    font-family: 'Source Code Pro', monospace; /* Use a monospace font for code */
    color: inherit; /* Inherit color to prevent overriding text color */
  }

  pre {
    background-color: ${({ theme }) => theme.inputBackground};
    padding: 10px;
    border-radius: 5px;
    overflow: auto;
    font-family: 'Source Code Pro', monospace; /* Monospace font for code blocks */
    color: inherit; /* Inherit color to prevent overriding text color */
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

  // Add console log to check the message text
  console.log(text); // Check if this is properly set to "Typing..."

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
          <FaCog size={24} /> // System messages use FaCog icon
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
                    <SyntaxHighlighter
                      style={github}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
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
                    aria-label={
                      children && children.length > 0
                        ? typeof children[0] === 'string'
                          ? children[0]
                          : 'Link'
                        : 'Link'
                    }
                    {...props}
                  >
                    {children}
                  </a>
                ),
                // Add more custom renderers if needed
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