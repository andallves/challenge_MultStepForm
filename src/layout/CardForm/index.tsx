import { Button } from '../../Components/Button';
import { DivSteps } from '../../Components/DivSteps';
import * as Styled from './styles';

export const CardForm = () => {
  return (
    <Styled.Container>
      <DivSteps />
      <Button btnText='Continuar' isDark={false} isUppercase={true} isBold={true} />
    </Styled.Container>
  )
}