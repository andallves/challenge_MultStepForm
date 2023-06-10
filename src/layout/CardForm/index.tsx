import { Button } from '../../Components/Button';
import { ButtonContainer } from '../../Components/ButtonContainer';
import { DivSteps } from '../../Components/DivSteps';
import { Divider } from '../../Components/Divider';
import { InputContainer } from '../../Components/InputContainer';
import { InputField } from '../../Components/InputField';
import * as Styled from './styles';

export const CardForm = () => {
  return (
    <Styled.Container>
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
    </Styled.Container>
  );
};
