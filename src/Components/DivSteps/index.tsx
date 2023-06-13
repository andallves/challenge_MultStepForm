import * as Styled from './styles';
import { IoIosArrowForward } from 'react-icons/io';
import { Steps } from '../Steps';
import { Select } from '../Select';

export const DivSteps = ({ currentStep }) => {

  const firstStep = (currentStep:number): string | undefined => {
    if (currentStep === 0) return `select`;
    if (currentStep === 1) return `active`;
    if (currentStep === 2) return `active`;
  }

  const secondStep = (currentStep:number): string | undefined => {
    if (currentStep === 0) return `disabled`;
    if (currentStep === 1) return `select`;
    if (currentStep === 2) return `active`;
  }

  const thirdStep = (currentStep:number): string | undefined => {
    if (currentStep === 0) return `disabled`;
    if (currentStep === 1) return `disabled`;
    if (currentStep === 2) return `select`;
  }

  return (
    <Styled.Container>
      <Steps>
        <Select status={() => firstStep(currentStep)} stepText={`1`} />
        <p className="text">Contato</p>
      </Steps>

      <IoIosArrowForward />

      <Steps>
        <Select
          status={() => secondStep(currentStep)}
          stepText={'2'}
        />
        <p className="text">Empresa</p>
      </Steps>

      <IoIosArrowForward />

      <Steps>
        <Select
          status={() => thirdStep(currentStep)}
          stepText={'3'}
        />
        <p className="text">Projeto</p>
      </Steps>
    </Styled.Container>
  );
};
