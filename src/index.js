import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Thypography from './styles/Typhography';

ReactDOM.render(
  <>
  <GlobalStyles />
  <Thypography />
  <App />
  </>,
  document.getElementById('root')
);

