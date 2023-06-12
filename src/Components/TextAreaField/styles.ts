import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: .8rem 1.6rem;
    gap: 1rem;

    width: 52.8rem;
    height: 10rem;

    background: ${theme.colors.white};
    border: .1rem solid ${theme.colors.gray10};
    border-radius: .2rem;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
  `}
`;
