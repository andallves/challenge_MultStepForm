import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    gap: 3.2rem;

    width: 52.8rem;
    height: 5.6rem;

    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
  `}
`;

