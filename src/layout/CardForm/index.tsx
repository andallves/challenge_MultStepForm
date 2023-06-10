import { Button } from '../../Components/Button';
import { DivSteps } from '../../Components/DivSteps';
import { Divider } from '../../Components/Divider';
import { InputContainer } from '../../Components/InputContainer';
import * as Styled from './styles';

export const CardForm = () => {
  return (
    <Styled.Container>
      <DivSteps />
      <Divider />
      <InputContainer>
      </InputContainer>
      <Button btnText='Continuar' isDark={false} isUppercase={true} isBold={true} />
    </Styled.Container>
  )
}
