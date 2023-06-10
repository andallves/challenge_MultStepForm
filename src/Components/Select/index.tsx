import * as Styled from './styles';

export const Select = ({ id }) => {
  return (
    <Styled.Container>
      <div id={id}>{id}</div>
    </Styled.Container>
  );
};
