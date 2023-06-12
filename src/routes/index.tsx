import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import { FirstStep } from '../pages/FirstStep';
import { ThirdStep } from '../pages/ThirdStep';
import { SecondStep } from '../pages/SecondStep';
import { useStepContext } from '../contexts/StepContext';

export const AppRoutes = () => {
  const [state] = useStepContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={`/:${state.stepId}`} element={<FirstStep />} />
          <Route path={`/:${state.stepId}`} element={<SecondStep />} />
          <Route path={`/:${state.stepId}`} element={<ThirdStep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
