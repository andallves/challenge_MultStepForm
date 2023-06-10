import * as Styled from './styles';
interface Button {
  btnText: string;
  isDark: boolean;
  isUppercase: boolean;
  isBold: boolean;
}

export const Button = ({ btnText, isDark, isUppercase, isBold }: Button) => {
  return (
    <Styled.Container isDark={isDark} isUppercase={isUppercase} isBold={isBold}>
      <span>{btnText}</span>
    </Styled.Container>
  )
}
