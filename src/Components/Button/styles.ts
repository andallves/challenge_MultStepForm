import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 3.2rem;
    gap: 0.8rem;

    width: 15.8rem;
    height: 5.6rem;

    /* Product/purple-light */
    background: ${theme.colors.purpleLight};
    box-shadow: 0 .4rem .4rem rgba(0, 0, 0, 0.25);
    border-radius: 0.6rem;
    border: none;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;


  `}
`;
