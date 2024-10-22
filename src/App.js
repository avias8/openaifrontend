import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [apiStatus, setApiStatus] = useState('checking');
  const [error, setError] = useState(null);

  const checkApiStatus = async () => {
    try {
      const response = await fetch('https://chatgpt-express-server-186364516466.us-central1.run.app/status');
      setApiStatus(response.ok ? 'online' : 'offline');
    } catch (error) {
      setApiStatus('offline');
    }
  };

  useEffect(() => {
    checkApiStatus();
    const intervalId = setInterval(checkApiStatus, 60000); // Check every minute
    return () => clearInterval(intervalId);
  }, []);

  const handleGenerateText = async () => {
    if (!prompt.trim()) {
      setError('Please enter a message');
      return;
    }

    setError(null);
    setChatLog(prev => [...prev, { sender: 'user', text: prompt }]);
    const currentPrompt = prompt;
    setPrompt('');

    try {
      const response = await fetch('https://chatgpt-express-server-186364516466.us-central1.run.app/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentPrompt }),
      });

      if (!response.ok) throw new Error('Failed to generate response');

      const data = await response.json();
      setChatLog(prev => [...prev, { sender: 'openai', text: data.generatedText }]);
    } catch (error) {
      console.error('Error generating text:', error);
      setChatLog(prev => [...prev, { sender: 'error', text: 'Error generating text' }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerateText();
    }
  };

  return (
    <div className="openai-test-container">
      <h2 className="title">Chat with OpenAI</h2>

      {/* API Status Orb */}
      <a
        href="https://console.cloud.google.com/run/detail/us-central1/chatgpt-express-server/metrics?project=chatgpt-express-server-project"
        target="_blank"
        rel="noopener noreferrer"
        className={`status-orb ${apiStatus}`}
        title="API Status"
      ></a>

      <div className="chat-log">
        {chatLog.map((message, index) => (
          <div key={index} className="chat-message-container">
            <div className={`chat-message ${message.sender}`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="input-container">
        <textarea
          className="openai-textarea"
          placeholder="Enter a message..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>

      <button 
        className="generate-btn" 
        onClick={handleGenerateText}
        disabled={!prompt.trim()}
      >
        Send
      </button>
    </div>
  );
};

export default App;