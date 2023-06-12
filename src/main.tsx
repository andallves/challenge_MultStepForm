import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import { StepContextProvider } from './contexts/StepContext/index.tsx';
import { AppRoutes } from './routes/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StepContextProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </StepContextProvider>
  </React.StrictMode>,
);
