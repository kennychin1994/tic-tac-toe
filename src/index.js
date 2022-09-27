import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Game from './components/Game';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

reportWebVitals(sendToVercelAnalytics);
