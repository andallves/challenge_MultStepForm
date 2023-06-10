import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;
    gap: 4rem;

    width: 52.8rem;
    height: 4.4rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  `};
`;
