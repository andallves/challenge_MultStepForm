import * as Styled from './styles';
import { TextAreaField } from '../../Components/TextAreaField';

export const ThirdStep = () => {
  return (
    <Styled.Container>
          <TextAreaField
            text={'Objetivos do projeto'}
            name={'nome'}
            placeholder={'Descreva quais os objetivos desse projeto'}
          />
    </Styled.Container>
  );
};
