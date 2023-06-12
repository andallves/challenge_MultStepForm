import * as Styled from './styles';
import { InputContainer } from '../../Components/InputContainer';
import { InputField } from '../../Components/InputField';
import { TextAreaField } from '../../Components/TextAreaField';

export const SecondStep = () => {
  return (
    <Styled.Container>
      <InputContainer>
        <InputField
          text={'Nome da empresa'}
          name={'nomedaempresa'}
          type={'text'}
          placeholder={'Qual é o nome da empresa'}
        />

        <InputField
          text={'Número de funcionários'}
          name={'qtdfuncionarios'}
          type={'number'}
          placeholder={'Digite o número de colaboradores'}
        />

        <TextAreaField
          text={'Sobre seu negócio'}
          name={'aboutnegocio'}
          placeholder={'Fale um pouco sobre seus produtos e serviços'}
        />
      </InputContainer>
    </Styled.Container>
  );
};
