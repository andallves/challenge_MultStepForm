import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '../layout/Container';
import App from '../pages/App';
import { NotFound } from '../pages/404';
import { FirstStep } from '../pages/FirstStep';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" elemnte={<FirstStep />}

        </Routes>
      </Container>
    </BrowserRouter>
  );
};
