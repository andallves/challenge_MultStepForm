import * as Styled from './styles';

interface Input {
  name: string;
  type: string;
  placeholder: string;
}

export const Input = ({ name, type, placeholder }: Input) => {
  return (
    <Styled.Container
      type={type}
      placeholder={placeholder}
      className={`input-${name}`}
      id={`input-${name}`}
    ></Styled.Container>
  );
};
