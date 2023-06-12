import { Button } from '../Components/Button';
import { ButtonContainer } from '../Components/ButtonContainer';
import { DivSteps } from '../Components/DivSteps';
import { Divider } from '../Components/Divider';
import { useStepContext } from '../contexts/StepContext';
import { userForm } from '../hooks/userForm';
import { CardForm } from '../layout/CardForm';
import { FirstStep } from '../pages/FirstStep';


function App() {
  const [state, actions] = useStepContext();
  
  return (
    <main>
      <CardForm>
        <DivSteps currentStep={state.stepId}/>
        <Divider />

        <FirstStep updateFieldHandler={actions.update}/>


          {!isFirstStep && (
            <Button
              nameofClass={'continuar'}
              type={'button'}
              btnText="Continuar"
              isDark={false}
              isUppercase={true}
              isBold={true}
              disabled={false}
              onButtonClicked={actions.next}
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
              onButtonClicked={actions.previous}
            />
          ) : (
            <Button
              type={'submit'}
              btnText="Enviar Proposta"
              isDark={false}
              isUppercase={true}
              isBold={true}
              disabled={false}
              onButtonClicked={actions.previous}
            />
          )}
      </CardForm>
    </main>
  );
}

export default App;
