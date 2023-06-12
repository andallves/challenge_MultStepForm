import { useStepContext } from '../../contexts/StepContext';
import * as Styled from './styles';

interface InputField {
  text: string;
  name: string;
  type: string;
  placeholder: string;
  updateFieldHandler: (name: string, target: string) => {};
}

export const InputField = ({ text, name, type, placeholder, updateFieldHandler}: InputField) => {
  const [dispatch] = useStepContext()
  return (
    <Styled.Container>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={updateFieldHandler)}
      />
    </Styled.Container>
  );
};
