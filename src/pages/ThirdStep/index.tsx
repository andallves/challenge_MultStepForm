import * as Styled from './styles';
import { TextAreaField } from '../../Components/TextAreaField';
import { useAppContext } from '../../contexts/AppContext';

export const ThirdStep = () => {
  const { updateAboutProject } = useAppContext();
  return (
    <Styled.Container>
          <TextAreaField
            text={'Objetivos do projeto'}
            name={'nome'}
            placeholder={'Descreva quais os objetivos desse projeto'}
            handleChangeTextArea={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
              updateAboutProject(event.target.value)
            }

          />
    </Styled.Container>
  );
};
