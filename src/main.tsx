import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { AppContextProvider } from './contexts/AppContext/index.tsx';
import { AppRoutes } from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
);
