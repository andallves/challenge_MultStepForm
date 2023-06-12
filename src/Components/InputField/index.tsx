import { useAppContext } from '../../contexts/AppContext';
import * as Styled from './styles';

interface InputField {
  text: string;
  name: string;
  type: string;
  placeholder: string;
}

export const InputField = ({ text, name, type, placeholder }: InputField) => {
  const { updateData } = useAppContext();
  
  return (
    <Styled.Container>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          updateData(event.target.value)
        }
      />
    </Styled.Container>
  );
};
