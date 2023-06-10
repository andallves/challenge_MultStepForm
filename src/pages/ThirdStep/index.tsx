import * as Styled from './styles';
import { CardForm } from '../../layout/CardForm';
import { DivSteps } from '../../Components/DivSteps';
import { Divider } from '../../Components/Divider';
import { InputContainer } from '../../Components/InputContainer';
import { InputField } from '../../Components/InputField';
import { ButtonContainer } from '../../Components/ButtonContainer';
import { Button } from '../../Components/Button';

export const ThirdStep = () => {
  return (
    <Styled.Container>
      <CardForm>
        <DivSteps />
        <Divider />
        <InputContainer>
          <InputField
            text={'Nome'}
            name={'nome'}
            type={'text'}
            placeholder={'Como prefere ser chamado'}
          />

          <InputField
            text={'Telefone'}
            name={'telefone'}
            type={'number'}
            placeholder={'Digite seu número de WhatsApp '}
          />

          <InputField
            text={'Email'}
            name={'email'}
            type={'email'}
            placeholder={'Digite seu e-mail'}
          />
        </InputContainer>

        <ButtonContainer>
          <Button
            btnText="Continuar"
            isDark={false}
            isUppercase={true}
            isBold={true}
          />
        </ButtonContainer>
      </CardForm>
    </Styled.Container>
  );
};
