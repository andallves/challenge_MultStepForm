import * as Styled from './styles';

interface Text {
  text: string;
  isDark: boolean;
  isUppercase: boolean;
  isBold: boolean;
}

export const Text = ({ text, isDark, isUppercase, isBold }: Text) => {
  return (
    <Styled.Text isDark={isDark} isUppercase={isUppercase} isBold={isBold}>
      {text}
    </Styled.Text>
  )
}
