import * as Styled from './styles';
import { IoIosArrowForward } from 'react-icons/io';
import { Steps } from '../Steps';
import { Select } from '../Select';

export const DivSteps = ({ currentStep }) => {
  return (
    <Styled.Container>
      <Steps>
        <Select status={'select'} stepText={`1`} />
        <p className="text">Contato</p>
      </Steps>

      <IoIosArrowForward />

      <Steps>
        <Select
          status={currentStep >= 1 ? 'active' : ''}
          stepText={'2'}
        />
        <p className="text">Empresa</p>
      </Steps>

      <IoIosArrowForward />

      <Steps>
        <Select
          status={currentStep >= 2 ? 'active' : ''}
          stepText={'3'}
        />
        <p className="text">Projeto</p>
      </Steps>
    </Styled.Container>
  );
};
