import { ReactNode } from 'react';
import * as Styled from './styles';

interface IProps {
  children: ReactNode;
}

export const ButtonContainer = ({ children }: IProps) => {
  return <Styled.Container>{children}</Styled.Container>
}
