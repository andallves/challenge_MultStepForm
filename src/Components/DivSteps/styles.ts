import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap: 4rem;

    width: 52.8rem;
    height: 4.4rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    > div p.text {
      width: 6rem;
      height: 2.4rem;

      font-family: ${theme.fontFamily.default};
      font-style: normal;
      font-weight: ${theme.fontTypes.bold};
      font-size: 1.6rem;
      line-height: 150%;

      color: ${theme.colors.gray40};

      flex: none;
      order: 1;
      flex-grow: 0;
    }
  `};
`;
