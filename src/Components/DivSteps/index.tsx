import * as Styled from './styles';
import { IoIosArrowForward } from 'react-icons/io';
import { Text } from '../Text';

export const DivSteps = () => {
  return (
    <Styled.Container>
      <Text text={"Contato"} />
      <IoIosArrowForward />
      <Text text={'Empresa'} />
      <IoIosArrowForward />
      <Text text={'Projeto'} />
    </Styled.Container>
  )
}
