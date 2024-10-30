// src/themes.js

export const darkTheme = {
  mode: 'dark',
  background: '#2c2c2c',
  inputBackground: '#3a3a3a',
  inputFocusBackground: '#4a4a4a',
  messageUser: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  messageOpenAI: '#1e1e1e',
  messageError: '#dc3545',
  messageSystem: '#4a4a4a', // Lighter grey for better contrast in dark mode
  textColor: '#ffffff', // White text for dark theme
  iconColor: '#ffffff',
  placeholderColor: '#a0a0a0',
  sendButtonBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  sendButtonHoverBackground: 'linear-gradient(135deg, #5a67d8 0%, #6b5dba 100%)',
  scrollbarThumb: '#888888',
  scrollbarTrack: '#333333',
  tableBackground: '#1c1c1c', // Darker table background to contrast with text
  tableBorderColor: '#555555',  // Visible borders in dark theme
  inputContainerBackground: '#333333',
  sendButtonBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  sendButtonHoverBackground: 'linear-gradient(135deg, #5a67d8 0%, #6b5dba 100%)',
  borderHoverColor: '#5a67d8', // Custom border color for dark theme
};

export const lightTheme = {
  mode: 'light',
  background: '#f9f9f9',
  inputBackground: '#ffffff',
  inputFocusBackground: '#f0f0f0',
  messageUser: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  messageOpenAI: '#e0e0e0',
  messageError: '#dc3545',
  messageSystem: '#d9d9d9', // Slightly darker grey for good visibility in light mode
  textColor: '#000000',
  iconColor: '#000000',
  placeholderColor: '#606060',
  sendButtonBackground: 'linear-gradient(135deg, #34c759 0%, #28a745 100%)',
  sendButtonHoverBackground: 'linear-gradient(135deg, #28a745 0%, #218838 100%)',
  scrollbarThumb: '#888888',
  scrollbarTrack: '#f0f0f0',
  tableBackground: '#ffffff', // Light table background for contrast
  tableBorderColor: '#dddddd',
  inputContainerBackground: '#f0f0f0',
  sendButtonBackground: 'linear-gradient(135deg, #34c759 0%, #28a745 100%)',
  sendButtonHoverBackground: 'linear-gradient(135deg, #28a745 0%, #218838 100%)',
  borderHoverColor: '#5a67d8', // Custom border color for dark theme
};