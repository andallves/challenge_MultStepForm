import * as Styled from './styles';

interface Select {
  status: string;
  stepText: string;
}
export const Select = ({ status, stepText }: Select) => {
  return (
    <Styled.Container className={status} >
      <p>{stepText}</p>
    </Styled.Container>
  );
};
