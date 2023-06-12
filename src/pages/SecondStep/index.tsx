import * as Styled from './styles';
import { InputContainer } from '../../Components/InputContainer';
import { InputField } from '../../Components/InputField';
import { TextAreaField } from '../../Components/TextAreaField';
import { useStepContext } from '../../contexts/StepContext';

export const SecondStep = (updateFieldHandler) => {

  const [state, action] = useStepContext()
  return (
    <Styled.Container>

        <InputContainer>
          <InputField
            text={'Nome da empresa'}
            name={'nomedaempresa'}
            type={'text'}
            placeholder={'Qual é o nome da empresa'}
            updateFieldHandler={updateFieldHandler}
          />

          <InputField
            text={'Número de funcionários'}
            name={'qtdfuncionarios'}
            type={'number'}
            placeholder={'Digite o número de colaboradores'}
            updateFieldHandler={updateFieldHandler}
          />

          <TextAreaField
            text={'Sobre seu negócio'}
            name={'aboutnegocio'}
            placeholder={'Fale um pouco sobre seus produtos e serviços'}
            updateFieldHandler={updateFieldHandler}
          />
        </InputContainer>
    </Styled.Container>
  );
};
