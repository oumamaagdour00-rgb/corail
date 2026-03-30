import React from 'react';
import ReactDOM from 'react-dom/client';

// Favicon injection (needed for vite-plugin-singlefile bundling)
import faviconUrl from './public/favicon-not-ocean.png';
const link = document.querySelector("link[rel='icon']") as HTMLLinkElement || document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = faviconUrl;
document.head.appendChild(link);

// Fonts
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

// Styles
import './index.css';

import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);