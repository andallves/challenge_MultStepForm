import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    div.disabled  {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1rem;
      gap: 1rem;

      width: 2.8rem;
      height: 2.8rem;

      background: ${theme.colors.gray10};
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

        color: ${theme.colors.gray30};

        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }

    > div.select {
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
    }

    > div.active {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1rem;
      gap: 1rem;

      width: 2.8rem;
      height: 2.8rem;

      background: ${theme.colors.sucessColor};
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
    }
  `}
`;
