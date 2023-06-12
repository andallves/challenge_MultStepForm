import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import { FirstStep } from '../pages/FirstStep';
import { ThirdStep } from '../pages/ThirdStep';
import { SecondStep } from '../pages/SecondStep';
import { useStepContext } from '../contexts/StepContext';

export const AppRoutes = () => {
  const [state] = useStepContext<T>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={`/:${state.userId}`} element={<FirstStep />} />
          <Route path={`/:${state.userId}`} element={<SecondStep />} />
          <Route path={`/:${state.userId}`} element={<ThirdStep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
