import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3.2rem;
    gap: 3.2rem;

    position: absolute;
    width: 59.2rem;
    height: 54.4rem;
    left: calc(50% - 59.2rem/2);
    top: calc(50% - 54.4rem/2);

    background: ${theme.colors.white};
    border: .1rem solid ${theme.colors.gray10};
    border-radius: .6rem;

  `}
`;
