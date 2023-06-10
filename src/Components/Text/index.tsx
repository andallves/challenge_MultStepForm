import * as Styled from './styles';

interface Text {
  text: string;
}

export const Text = ({ text }: Text) => {
  return (
    <Styled.Container>
      {text}
    </Styled.Container>
  )
}
