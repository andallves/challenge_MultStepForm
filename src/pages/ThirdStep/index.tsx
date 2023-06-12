import * as Styled from './styles';
import { InputContainer } from '../../Components/InputContainer';
import { TextAreaField } from '../../Components/TextAreaField';

export const ThirdStep = ({updateFieldHandler}) => {
  return (
    <Styled.Container>
        <InputContainer>
          <TextAreaField
            text={'Objetivos do projeto'}
            name={'nome'}
            placeholder={'Descreva quais os objetivos desse projeto'}
            updateFieldHandler={updateFieldHandler}
          />
        </InputContainer>
    </Styled.Container>
  );
};
