import { InputFieldProps } from '../../interfaces/InputField';
import * as Styled from './styles';



export const InputField = ({ text, name, type, placeholder, handleChangeInput }: InputFieldProps) => {

  return (
    <Styled.Container>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        onChange={handleChangeInput}
      />
    </Styled.Container>
  );
};
