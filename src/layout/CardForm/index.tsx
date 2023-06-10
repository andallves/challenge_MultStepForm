import { ReactNode } from 'react';
import * as Styled from './styles';
interface CardForm {
  children: ReactNode;
}

export const CardForm = ({ children }: CardForm) => {
  return <Styled.Container>{children}</Styled.Container>;
};
