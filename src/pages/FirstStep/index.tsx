import { InputContainer } from '../../Components/InputContainer';
import { InputField } from '../../Components/InputField';
import * as Styled from './styles';

export const FirstStep = ({updateFieldHandler}) => {

  return (
    <Styled.Container>
      <InputContainer>
        <InputField
          text={'Nome'}
          name={'nome'}
          type={'text'}
          placeholder={'Como prefere ser chamado'}
          updateFieldHandler={updateFieldHandler}

        />

        <InputField
          text={'Telefone'}
          name={'telefone'}
          type={'number'}
          placeholder={'Digite seu número de WhatsApp '}
          updateFieldHandler={updateFieldHandler}

        />

        <InputField
          text={'Email'}
          name={'email'}
          type={'email'}
          placeholder={'Digite seu e-mail'}
          updateFieldHandler={updateFieldHandler}

        />
      </InputContainer>
    </Styled.Container>
  );
};
