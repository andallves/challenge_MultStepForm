import styled, { css } from 'styled-components';

export const Divider = styled.span`
  ${({ theme }) => css`
    width: 52.8rem;
    height: 0;

    border: .1rem solid ${theme.colors.gray10};

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
  `}
`;
