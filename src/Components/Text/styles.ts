import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    width: 9.4rem;
    height: 2.4rem;
    font-style: normal;
    font-weight: ${theme.fontTypes.bold};
    line-height: 150%;
    text-transform: uppercase;
    color: ${theme.colors.white};

    flex: none;
    order: 1;
    flex-grow: 0;
  `};
`;
