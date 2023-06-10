import { ReactNode } from 'react';
import * as Styled from './styles';

interface ButtonContainer {
  children: ReactNode;
}

export const ButtonContainer = ({ children }: ButtonContainer) => {
  return <Styled.Container>{children}</Styled.Container>;
};
