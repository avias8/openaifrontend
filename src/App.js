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
  padding: 20px; /* Reduced padding */
  background: ${({ theme }) => theme.background};
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  margin: 40px auto;
  color: ${({ theme }) => theme.textColor};
  position: relative;

  transition: background 0.3s, color 0.3s;

  @media (max-width: 600px) {
    padding: 15px; /* Adjusted for smaller screens */
    margin: 20px auto;
    max-width: 95%;
  }
`;

// Optional: Styled fallback for Suspense
const Loading = styled.div`
  text-align: center;
  padding: 20px;
  color: ${({ theme }) => theme.textColor};
`;

// Main App Component
const App = () => {
  const [prompt, setPrompt] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [apiStatus, setApiStatus] = useState('checking');
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'light' or 'dark'

  const chatEndRef = useRef(null); // For auto-scrolling

  // Define checkApiStatus before using it in useEffect
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

  // Persist theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    checkApiStatus();
  }, [checkApiStatus]); // Include checkApiStatus in dependencies

  useEffect(() => {
    // Define initial messages
    const initialMessages = [
      {
        id: 1,
        sender: 'system',
        text: `Hey, I'm **Avi Varma**, welcome to my **Inference API!**`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
      {
        id: 2,
        sender: 'system',
        text: `This solution is a front end connecting to my hosted Google Cloud Express server, which serves the responses for our requests. The front end is created using **React**, **styled-components**, and **Node.js**.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
    setChatLog(initialMessages);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when chatLog or isLoading changes
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog, isLoading]);

  const handleGenerateText = useCallback(async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt');
      return;
    }

    const userMessage = {
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatLog((prev) => [...prev, userMessage]);
    setIsLoading(true); // Start loading

    // Add a "Typing..." message
    const typingMessage = {
      sender: 'openai',
      text: 'Typing...',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setChatLog((prev) => [...prev, typingMessage]);

    try {
      const response = await fetch('https://chatgpt-express-server-186364516466.us-central1.run.app/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      const openaiMessage = {
        sender: 'openai',
        text: data.generatedText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Remove the "Typing..." message and add the actual response
      setChatLog((prev) => prev.slice(0, -1).concat(openaiMessage));
    } catch (error) {
      console.error('Error generating text:', error);
      const errorMessage = {
        sender: 'error',
        text: 'Error generating text. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatLog((prev) => prev.slice(0, -1).concat(errorMessage));
    } finally {
      setIsLoading(false); // Stop loading
    }
  }, [prompt]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme); // Persist theme preference
      return newTheme;
    });
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle /> {/* Apply global styles */}
      <Container>
        <Header apiStatus={apiStatus} toggleTheme={toggleTheme} currentTheme={theme} />

        {/* Wrap lazy-loaded components with Suspense */}
        <Suspense fallback={<Loading>Loading chat...</Loading>}>
          <ChatLog chatLog={chatLog} theme={theme} />
        </Suspense>

        <Suspense fallback={<Loading>Loading input...</Loading>}>
          <InputArea prompt={prompt} setPrompt={setPrompt} handleGenerateText={handleGenerateText} />
        </Suspense>

        <div ref={chatEndRef} /> {/* For auto-scrolling */}
      </Container>
    </ThemeProvider>
  );
};

export default App;