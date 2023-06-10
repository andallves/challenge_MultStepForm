import * as Styled from './styles';
import { Text } from '../Text';
interface Button {
  btnText: string;
}

export const Button = ({ btnText }: Button) => {
  return (
    <Styled.Container>
      <Text btnText={btnText} />
    </Styled.Container>
  )
}
