import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 1.6rem;

    width: 52.8rem;
    height: 34.8rem;

    flex: none;
    order: 2;
    flex-grow: 0;
  `}
`;
