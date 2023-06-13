import styled, { css } from 'styled-components';
import { StyleClosetTheme } from '../../styles/theme';

interface Container {
  theme: StyleClosetTheme;
  isBold: boolean;
  isUppercase: boolean;
  isDark: boolean;
}
export const Container = styled.div`
  ${({ theme }) => css`
    > button.next {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 1.6rem 3.2rem;
      gap: 0.8rem;
      cursor: pointer;
      transition: 0.2ms;
      box-sizing: border-box;

      width: 15.8rem;
      height: 5.6rem;

      /* Product/purple-light */
      background: ${theme.colors.purpleMid};
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0.6rem;
      border: none;

      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;

      > span {
        width: 9.5rem;
        height: 2.4rem;

        font-style: normal;
        font-weight: ${theme.fontTypes.bold};
        font-size: 1.6rem;
        line-height: 150%;
        text-transform: uppercase;
        color: ${theme.colors.white};
        text-align: center;

        flex: none;
        order: 1;
        flex-grow: 0;
      }

      &:hover {
        background: ${theme.colors.purpleLight};
      }
    }

    > button.prev {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 1.6rem 3.2rem;
      gap: 0.8rem;
      cursor: pointer;
      transition: all 0.4ms ease-in-out;

      width: 15.8rem;
      height: 5.6rem;

      /* Product/purple-light */
      background: ${theme.colors.white};
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0.6rem;
      border: 0.1rem solid ${theme.colors.purpleMid};

      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;

      > span {
        width: 9.4rem;
        height: 2.4rem;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        font-style: normal;
        font-weight: ${theme.fontTypes.bold};
        font-size: 1.6rem;
        line-height: 150%;
        text-transform: uppercase;
        color: ${theme.colors.purpleMid};

        flex: none;
        order: 1;
        flex-grow: 0;
      }

      &:hover,
      &:hover span {
        background: ${theme.colors.purpleMid};
        color: ${theme.colors.white};
      }
    }
  `}
`;
