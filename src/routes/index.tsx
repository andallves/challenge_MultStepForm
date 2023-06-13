import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirstStep } from '../pages/FirstStep';
import { ThirdStep } from '../pages/ThirdStep';
import { SecondStep } from '../pages/SecondStep';
import App from '../App';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={`/:1`} element={<FirstStep />} />
          <Route path={`/:2`} element={<SecondStep />} />
          <Route path={`/:3`} element={<ThirdStep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
