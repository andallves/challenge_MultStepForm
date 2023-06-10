import * as Styled from './styles';

interface Text {
  btnText: string;
}

export const Text = ({ btnText }: Text) => {
  return (
    <Styled.Container>
      {btnText}
    </Styled.Container>
  )
}
