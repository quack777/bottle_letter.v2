import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router';
import GlobalStyle from './styles/global-style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
