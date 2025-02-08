// src/App.jsx

import React, { useState, useEffect, useRef, Suspense, lazy, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle'; // Ensure GlobalStyle is imported

// Lazy load ChatLog and InputArea components
const ChatLog = lazy(() => import('./components/ChatLog'));
const InputArea = lazy(() => import('./components/InputArea'));

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px; /* Adjust if needed */
  background: ${({ theme }) => theme.background};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  max-width: 1200px;
  margin: 20px auto; /* Reduced top and bottom margin */
  color: ${({ theme }) => theme.textColor};
  position: relative;
  height: calc(100vh - 20px); /* Use the whole viewport height with minimal margins */
  overflow: hidden; /* Prevent overflow outside the container */
  transition: background 0.3s, color 0.3s;
  
  @media (max-width: 800px) {
    margin: 20px 20px;
  }

  @media (max-width: 600px) {
    margin: 10px 10px;
  }
`;

// Optional: Styled fallback for Suspense
const Loading = styled.div`
  text-align: center;
  padding: 20px;
  color: ${({ theme }) => theme.textColor};
`;

// Styled component for displaying version info
const VersionInfo = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 0.9em;
  color: ${({ theme }) => theme.textColor};
`;

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [apiStatus, setApiStatus] = useState('checking');
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'
  const [version, setVersion] = useState(''); // State to hold version info

  const chatEndRef = useRef(null); // For auto-scrolling

  // Check API status
  const checkApiStatus = useCallback(async () => {
    try {
      const response = await fetch('https://chatgpt-express-server-186364516466.us-central1.run.app/status');
      if (response.ok) {
        setApiStatus('online');
      } else {
        setApiStatus('offline');
      }
    } catch (error) {
      setApiStatus('offline');
    }
  }, []);

  // Fetch version information
  const fetchVersion = useCallback(async () => {
    try {
      const response = await fetch('https://chatgpt-express-server-186364516466.us-central1.run.app/version');
      if (response.ok) {
        const data = await response.json();
        setVersion(data.version);
      } else {
        setVersion('unknown');
      }
    } catch (error) {
      console.error('Error fetching version:', error);
      setVersion('unknown');
    }
  }, []);

  // Persist theme preference and check API status on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
    }
    checkApiStatus();
    fetchVersion();
  }, [checkApiStatus, fetchVersion]);

  useEffect(() => {
    const currentTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const initialMessages = [
      {
        id: 1,
        sender: 'system',
        text: `
# Welcome to Avi Varma's Inference API!

This is a **React-based front end** for interacting with a **Google Cloud-hosted API**. The API provides inference capabilities using **machine learning** models and generates responses for requests you send. Below is a technical overview of the system.

---

## Technical Breakdown

### Backend:
- **Google Cloud Run**: A scalable, serverless platform that automatically adjusts based on traffic while keeping costs low.
- **Express.js**: Manages API requests and integrates with external services like the OpenAI API.
- **Inference API**: Processes user inputs or images and returns predictions in markdown format, allowing flexible responses.

### Frontend:
- **React**: A dynamic, component-based UI built for seamless user experiences.
- **Styled-components**: Scoped CSS for modular design and conflict-free styling.
- **Markdown Handling**: I use \`ReactMarkdown\` for parsing markdown input and supporting rich text formatting.
- **Syntax Highlighting**: Code snippets are highlighted using \`react-syntax-highlighter\`.
- **Clipboard Support for Code Blocks**: I use \`react-copy-to-clipboard\` to add a convenient "copy to clipboard" button, allowing users to easily copy code snippets.

| Key Tooling            | Awesome? |
| ---------------------- | ------ | 
| React                  | ✅ |
| Express.js             | ✅ |
| Google Cloud           | ✅ |
| react-copy-to-clipboard| ✅ |

#### Markdown Rendering:
- **ReactMarkdown**: Displays markdown responses, including formatted text, links, and code blocks.
- [x] **GitHub-flavored markdown (GFM)**: Enabled via the \`remark-gfm\` plugin, supporting features like checkboxes, tables, and strikethroughs.

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Avi')); // Output: Hello, Avi!
\`\`\`
        `,
        timestamp: currentTimestamp
      },
      {
        id: 2,
        sender: 'openai',
        text: `Hey, how can I assist you today?`,
        timestamp: currentTimestamp
      }
    ];
    setChatLog(initialMessages);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when chatLog or isLoading changes
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog, isLoading]);

  // Updated handleGenerateText to send full conversation context
  const handleGenerateText = useCallback(async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt');
      return;
    }

    const userMessage = {
      id: chatLog.length + 1,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Append the new user message to the chat log
    setChatLog((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Add a "Typing..." placeholder message
    const typingMessage = {
      id: chatLog.length + 2,
      sender: 'openai',
      text: 'Typing...',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setChatLog((prev) => [...prev, typingMessage]);

    // Build the conversation context (filter out the "Typing..." message)
    const conversationContext = [...chatLog, userMessage]
      .filter((msg) => msg.text !== 'Typing...')
      .map((msg) => {
        let role = 'assistant'; // default to assistant
        if (msg.sender === 'system') role = 'system';
        else if (msg.sender === 'user') role = 'user';
        else if (msg.sender === 'openai') role = 'assistant';
        return { role, content: msg.text };
      });

    try {
      const response = await fetch('https://chatgpt-express-server-186364516466.us-central1.run.app/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationContext }),
      });
      const data = await response.json();

      const openaiMessage = {
        id: chatLog.length + 3,
        sender: 'openai',
        text: data.generatedText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Remove the "Typing..." placeholder and add the actual response
      setChatLog((prev) => prev.slice(0, -1).concat(openaiMessage));
    } catch (error) {
      console.error('Error generating text:', error);
      const errorMessage = {
        id: chatLog.length + 3,
        sender: 'error',
        text: 'Error generating text. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatLog((prev) => prev.slice(0, -1).concat(errorMessage));
    } finally {
      setIsLoading(false);
    }
  }, [prompt, chatLog]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme); // Persist theme preference
      return newTheme;
    });
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header apiStatus={apiStatus} toggleTheme={toggleTheme} currentTheme={theme} />
        <Suspense fallback={<Loading>Loading chat...</Loading>}>
          <ChatLog chatLog={chatLog} theme={theme} chatEndRef={chatEndRef} />
        </Suspense>
        <Suspense fallback={<Loading>Loading input...</Loading>}>
          <InputArea prompt={prompt} setPrompt={setPrompt} handleGenerateText={handleGenerateText} />
        </Suspense>
        <div ref={chatEndRef} />
        {/* Display version info */}
        <VersionInfo>Version: {version || 'loading...'}</VersionInfo>
      </Container>
    </ThemeProvider>
  );
};

export default App;
