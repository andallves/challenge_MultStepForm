import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .8rem;
    gap: .8rem;

    width: 11.2rem;
    height: 4.4rem;

    border-radius: .2rem;

    flex: none;
    order: 0;
    flex-grow: 0;
  `};
`;
