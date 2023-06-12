import * as Styled from './styles';
import { IoIosArrowForward } from 'react-icons/io';
import { Steps } from '../Steps';
import { Select } from '../Select';
import { useStepContext } from '../../contexts/StepContext';
import { ReducerProps } from '../../contexts/StepContext/reducer';

export const DivSteps = ({currentStep}) => {
  const [state, action] = useStepContext<ReducerProps[]>();
  return (
    <Styled.Container>
        <Steps>
          <Select status={'active'} stepText={'1'} />
          <p className="text">Contato</p>
        </Steps>

      <IoIosArrowForward />

      <Steps>
        <Select status={currentStep >= 1 ? 'active' : 'disable'} stepText={'2'} />
        <p className="text">Empresa</p>
      </Steps>

      <IoIosArrowForward />

      <Steps>
        <Select status={currentStep >= 2 ? 'active' : 'disable'} stepText={'3'} />
        <p className="text">Projeto</p>
      </Steps>
    </Styled.Container>

  );
};
