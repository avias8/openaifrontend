import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [apiStatus, setApiStatus] = useState('checking'); // 'online', 'offline', 'checking'

  // Function to check API status
  const checkApiStatus = async () => {
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
  };

  // Call the API status check on component mount
  useEffect(() => {
    checkApiStatus();
  }, []);

  // Function to handle sending a prompt to the OpenAI API
  const handleGenerateText = async () => {
    if (!prompt) {
      alert('Please enter a prompt');
      return;
    }

    // Add user's prompt to the chat log
    setChatLog((prevChatLog) => [...prevChatLog, { sender: 'user', text: prompt }]);

    try {
      const response = await fetch('https://chatgpt-express-server-186364516466.us-central1.run.app/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      // Add the generated text from OpenAI to the chat log
      setChatLog((prevChatLog) => [...prevChatLog, { sender: 'openai', text: data.generatedText }]);
    } catch (error) {
      console.error('Error generating text:', error);
      setChatLog((prevChatLog) => [...prevChatLog, { sender: 'error', text: 'Error generating text' }]);
    }

    // Clear the input field after submission
    setPrompt('');
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
          <div key={index} className={`chat-message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div className="input-container">
        <textarea
          className="openai-textarea"
          placeholder="Enter a message"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <br />

      <button className="generate-btn" onClick={handleGenerateText}>Send</button>
    </div>
  );
};

export default App;