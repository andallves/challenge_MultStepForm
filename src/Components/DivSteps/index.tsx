import * as Styled from './styles';
import { IoIosArrowForward } from 'react-icons/io';
import { Text } from '../Text';
import { Steps } from '../Steps';
import { Select } from '../Select';

export const DivSteps = () => {
  return (
    <Styled.Container>
      <Steps>
        <Select id={'1'}/>
        <Text
          text={'Contato'}
          isDark={true}
          isUppercase={false}
          isBold={true}
        />
      </Steps>
      <IoIosArrowForward />
      <Steps>
        <Select id={'2'}/>
        <Text
          text={'Empresa'}
          isDark={true}
          isUppercase={false}
          isBold={true}
        />
      </Steps>
      <IoIosArrowForward />
      <Steps>
        <Select id={'3'}/>
        <Text
          text={'Projeto'}
          isDark={true}
          isUppercase={false}
          isBold={true}
        />
      </Steps>
    </Styled.Container>
  );
};
