// src/themes.js

export const darkTheme = {
  mode: 'dark',
  background: '#2c2c2c',
  inputBackground: '#3a3a3a',
  inputFocusBackground: '#4a4a4a',
  messageUser: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  messageOpenAI: '#1e1e1e',
  messageError: '#dc3545',
  textColor: '#ffffff', // White text for dark theme
  iconColor: '#ffffff', // White icons for dark theme
  placeholderColor: '#a0a0a0', // Placeholder text color for dark theme
  sendButtonBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  sendButtonHoverBackground: 'linear-gradient(135deg, #5a67d8 0%, #6b5dba 100%)',
  scrollbarThumb: '#888888', // Add scrollbar thumb color for dark mode
  scrollbarTrack: '#333333', // Add scrollbar track color for dark mode
};

export const lightTheme = {
  mode: 'light',
  background: '#f9f9f9',
  inputBackground: '#ffffff',
  inputFocusBackground: '#f0f0f0',
  messageUser: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  messageOpenAI: '#e0e0e0',
  messageError: '#dc3545',
  textColor: '#000000', // Black text for light theme
  iconColor: '#000000', // Black icons for light theme
  placeholderColor: '#606060', // Placeholder text color for light theme
  sendButtonBackground: 'linear-gradient(135deg, #34c759 0%, #28a745 100%)',
  sendButtonHoverBackground: 'linear-gradient(135deg, #28a745 0%, #218838 100%)',
  scrollbarThumb: '#888888', // Add scrollbar thumb color for light mode
  scrollbarTrack: '#f0f0f0', // Add scrollbar track color for light mode
};