import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './utils/ErrorBoundary/ErrorBoundary.tsx';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
