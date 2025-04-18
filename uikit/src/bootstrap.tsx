import React from 'react';
import ReactDOM from 'react-dom/client';

import { Input, Typography } from './components';

import './global.module.css';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);

  root.render(
    <React.StrictMode>
      <Typography variant="h1">UIKit</Typography>
      <Input />
    </React.StrictMode>,
  );
}
