import * as Styled from './styles';
import { Text } from '../Text';
interface Button {
  btnText: string;
  isDark: boolean;
  isUppercase: boolean;
  isBold: boolean;
}

export const Button = ({ btnText, isDark, isUppercase, isBold }: Button) => {
  return (
    <Styled.Container>
      <Text text={btnText} isDark={isDark} isUppercase={isUppercase} isBold={isBold} />
    </Styled.Container>
  )
}
