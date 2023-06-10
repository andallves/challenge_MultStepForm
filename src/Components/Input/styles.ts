import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .8rem 1.6rem;
    gap: 1rem;

    width: 52.8rem;
    height: 5.6rem;

    background: ${theme.colors.white};
    border: .1rem solid ${theme.colors.gray10};
    border-radius: .2rem;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  `}
`;
