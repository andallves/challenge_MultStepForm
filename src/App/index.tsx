import { Button } from '../Components/Button';
import { ButtonContainer } from '../Components/ButtonContainer';
import { DivSteps } from '../Components/DivSteps';
import { Divider } from '../Components/Divider';
import { userForm } from '../hooks/userForm';
import { CardForm } from '../layout/CardForm';
import { FirstStep } from '../pages/FirstStep';
import { SecondStep } from '../pages/SecondStep';
import { ThirdStep } from '../pages/ThirdStep';

import * as Styled from './styles';

function App() {
  const steps: React.ReactNode[] = [
    <FirstStep />,
    <SecondStep />,
    <ThirdStep />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    userForm(steps);

  return (
    <main>
      <Styled.Container>
        <CardForm>
          <DivSteps currentStep={currentStep} />
          <Divider />
          {
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>): void =>
                changeStep(currentStep + 1, event)
              }
            >
              {currentComponent}

              <ButtonContainer>
                {!isFirstStep && (
                  <Button
                    nameofClass={'prev'}
                    type={'button'}
                    btnText="Voltar"
                    isDark={false}
                    isUppercase={true}
                    isBold={true}
                    disabled={false}
                    onButtonClicked={() => changeStep(currentStep - 1)}
                  />
                )}

                {!isLastStep ? (
                  <Button
                    nameofClass={'next'}
                    type={'submit'}
                    btnText="Continuar"
                    isDark={false}
                    isUppercase={true}
                    isBold={true}
                    disabled={false}
                  />
                ) : (
                  <Button
                    nameofClass={'next'}
                    type={'button'}
                    btnText="Enviar"
                    isDark={false}
                    isUppercase={true}
                    isBold={true}
                    disabled={false}
                  />
                )}
              </ButtonContainer>
            </form>
          }
        </CardForm>
      </Styled.Container>
    </main>
  );
}

export default App;
