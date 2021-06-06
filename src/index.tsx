import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/demo/Hello';

const appContainer = document.querySelector('.app');

ReactDOM.render(<Hello name="TypeScript" />, appContainer);
