import * as Styled from './styles';
import { IoIosArrowForward } from 'react-icons/io';
import { Text } from '../Text';

export const DivSteps = () => {
  return (
    <Styled.Container>
      <div>
      <Text text={'Contato'} isDark={true} isUppercase={false} isBold={true} />
      </div>
      <IoIosArrowForward />
      <div>
      <Text text={'Empresa'} isDark={true} isUppercase={false} isBold={true} />
      </div>
      <IoIosArrowForward />
      <div>
      <Text text={'Projeto'} isDark={true} isUppercase={false} isBold={true} />
      </div>
    </Styled.Container>
  );
};
