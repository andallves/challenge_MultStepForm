import styled, { css } from 'styled-components';

export const Container = styled.div`
  > div.select {
    ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1rem;
      gap: 1rem;

      width: 2.8rem;
      height: 2.8rem;

      background: ${theme.colors.purpleMid};
      border-radius: 50%;

      flex: none;
      order: 0;
      flex-grow: 0;

      /* font styles */
      > p {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: ${theme.fontTypes.bold};
        font-size: 1.4rem;
        line-height: 150%;

        leading-trim: both;
        text-edge: cap;
        text-align: center;

        color: ${theme.colors.white};

        flex: none;
        order: 0;
        flex-grow: 0;
      }
    `}
  }

  div.active {
    ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1rem;
      gap: 1rem;

      width: 2.8rem;
      height: 2.8rem;

      background: ${theme.colors.sucess};
      border-radius: 50%;

      flex: none;
      order: 0;
      flex-grow: 0;

      /* font styles */
      > p {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: ${theme.fontTypes.bold};
        font-size: 1.4rem;
        line-height: 150%;

        leading-trim: both;
        text-edge: cap;
        text-align: center;

        color: ${theme.colors.white};

        flex: none;
        order: 0;
        flex-grow: 0;
      }
    `};

    > div.disabled {
      ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.8rem 1rem;
        gap: 1rem;

        width: 2.8rem;
        height: 2.8rem;

        background: ${theme.colors.gray20};
        border-radius: 50%;

        flex: none;
        order: 0;
        flex-grow: 0;

        /* font styles */
        > p {
          font-family: 'Titillium Web';
          font-style: normal;
          font-weight: ${theme.fontTypes.bold};
          font-size: 1.4rem;
          line-height: 150%;

          leading-trim: both;
          text-edge: cap;
          text-align: center;

          color: ${theme.colors.gray40};

          flex: none;
          order: 0;
          flex-grow: 0;
        }
      `};
    }
  }
`;
