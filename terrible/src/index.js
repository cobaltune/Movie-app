import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { createRoot } from 'react-dom/client';
import { Navigation } from './components/Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const navDomNode = document.getElementById('navigation');
const navRoot = createRoot(navDomNode);
navRoot.render(<Navigation />);
