import { InputFieldProps } from '../../interfaces/InputField';
import * as Styled from './styles';

export const TextAreaField = ({ text, name, placeholder, handleChangeTextArea }: InputFieldProps) => {
  return (
    <Styled.Container>
      <label htmlFor={name}>{text}</label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required
        onChange={handleChangeTextArea}
      ></textarea>
    </Styled.Container>
  );
};
