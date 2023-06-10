import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: .4rem;

    width: 52.8rem;
    height: 8.4rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  `}
`;
