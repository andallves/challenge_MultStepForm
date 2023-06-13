import * as Styled from './styles';

export const TextAreaField = ({ text, name, placeholder }) => {
  return (
    <Styled.Container>
      <label htmlFor={name}>{text}</label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required
      ></textarea>
    </Styled.Container>
  );
};
