import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: .4rem;

    width: 52.8rem;
    height: 12.8rem;

    flex: none;
    order: 2;
    flex-grow: 0;

    > label {
      height: 2.4rem;

      font-family: ${theme.fontFamily.defaultFont };
      font-style: normal;
      font-weight: ${theme.fontTypes.bold};
      font-size: 1.6rem;
      line-height: 150%;

      color: ${theme.colors.gray40};

      flex: none;
      order: 0;
      flex-grow: 0;
    }

    > textarea {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: .8rem 1.6rem;
      gap: 1rem;

      width: 52.8rem;
      height: 10rem;

      background: ${theme.colors.white};
      border: .1rem solid ${theme.colors.gray10};
      border-radius: .2rem;

      flex: none;
      order: 1;
      align-self: stretch;
      flex-grow: 0;

      &::placeholder {
        width: 30rem;
        height: 2.4;

        font-family: ${theme.fontFamily.defaultFont};
        font-style: normal;
        font-weight: ${theme.fontTypes.regular};
        font-size: 1.6rem;
        line-height: 150%;

        color: ${theme.colors.gray20};

        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }
  `}
`;
