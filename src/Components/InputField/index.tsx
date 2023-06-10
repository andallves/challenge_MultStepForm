import { Input } from '../Input';
import { Text } from '../Text';
import * as Styled from './styles';

interface InputField {
  text: string;
  name: string;
  type: string;
  placeholder: string;
}

export const InputField = ({ text, name, type, placeholder }: InputField) => {
  return (
    <Styled.Container>
      <Text text={text} isDark={true} isUppercase={false} isBold={true} />
      <Input name={name} type={type} placeholder={placeholder} />
    </Styled.Container>
  );
};
