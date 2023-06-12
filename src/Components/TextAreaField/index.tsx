import * as Styled from './styles';

export const TextAreaField = ({ text, name, placeholder, updateFieldHandler}) => {
  return (
    <Styled.Container>
      <label htmlFor={name}>{text}</label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        required
        onChange={(e) => updateFieldHandler(`${name}`, e.target.value)}
      ></textarea>
    </Styled.Container>
  );
};
