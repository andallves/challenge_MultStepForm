import { Button } from '../Components/Button';
import { DivSteps } from '../Components/DivSteps';
import { Divider } from '../Components/Divider';
import { useAppContext } from '../contexts/AppContext';
import { CardForm } from '../layout/CardForm';
import { FirstStep } from '../pages/FirstStep';

function App() {
  const { state, nextStep } = useAppContext();

  const isFirstStep = true;
  const isLastStep = false;
  return (
    <main>
      <CardForm>
        <DivSteps currentStep={state.stepId} />
        <Divider />

        <FirstStep />

        {isFirstStep && (
          <Button
            nameofClass={'next'}
            type={'button'}
            btnText="Continuar"
            isDark={false}
            isUppercase={true}
            isBold={true}
            disabled={false}
            onButtonClicked={() => nextStep}
          />
        )}

        {!isLastStep ? (
          <Button
            nameofClass={'continuar'}
            type={'button'}
            btnText="Continuar"
            isDark={false}
            isUppercase={true}
            isBold={true}
            disabled={false}
            onButtonClicked={() => nextStep}
          />
        ) : (
          <Button
            nameofClass={'continuar'}
            type={'submit'}
            btnText="Enviar Proposta"
            isDark={false}
            isUppercase={true}
            isBold={true}
            disabled={false}
            onButtonClicked={() => nextStep}
          />
        )}
      </CardForm>
    </main>
  );
}

export default App;
