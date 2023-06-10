import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 1.6rem;

    width: 52.8rem;
    height: 28.4rem;

    flex: none;
    order: 2;
    flex-grow: 0;
  `}
`;
