import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 0.4rem;

    width: 52.8rem;
    height: 8.4rem;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    > label {
      width: 15.2rem;
      height: 2.4rem;

      font-family: ${theme.fontFamily.defaultFont};
      font-style: normal;
      font-weight: ${theme.fontTypes.bold};
      font-size: 1.6rem;
      line-height: 150%;

      color: ${theme.colors.gray40};

      flex: none;
      order: 0;
      flex-grow: 0;
    }
    > input {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.8rem 1.6rem;
      gap: 1rem;

      width: 52.8rem;
      height: 5.6rem;

      background: ${theme.colors.white};
      border: 0.1rem solid ${theme.colors.gray10};
      border-radius: 0.2rem;

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;

      &:focus {
        outline: none;
        border: .1rem solid ${theme.colors.purpleMid}
      }

      &::placeholder {
        ${({ theme }) => css`
          height: 2.4rem;

          font-family: ${theme.fontFamily.default};
          font-style: normal;
          font-weight: ${theme.fontTypes.regular};
          font-size: 1.6rem;
          line-height: 150%;

          color: ${theme.colors.gray20};

          flex: none;
          order: 0;
          flex-grow: 0;
        `};
      }

    }
  `}
`;
