import React from 'react';
import { createRoot } from 'react-dom/client';
import Component from './components/Component';
import './src/styles/tailwind.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Component />);
}

