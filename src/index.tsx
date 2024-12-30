import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme, THEME_ID } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const themeOfTheBestParty = createTheme({
  palette: {
    primary: {
      main: '#009a00',
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ [THEME_ID]: themeOfTheBestParty }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
