import * as Styled from './styles';

interface Select {
  status: () => string | undefined;
  stepText: string;
}
export const Select = ({ status, stepText }: Select) => {
  return (
    <Styled.Container>
      <div className={status()}>
        <p>{stepText}</p>
      </div>
    </Styled.Container>
  );
};
