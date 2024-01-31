import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import './styles/main.scss';
import './translations';  // import translations (i18n) to be bundled

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
