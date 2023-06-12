import styled, { css } from 'styled-components';
import { StyleClosetTheme } from '../../styles/theme';

interface Container {
  theme: StyleClosetTheme;
  isBold: boolean;
  isUppercase: boolean;
  isDark: boolean;
}
export const Container = styled.div`
  ${({theme, nameofClass}) => css`
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

  > button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1.6rem 3.2rem;
      gap: 0.8rem;

      width: 15.8rem;
      height: 5.6rem;

      /* Product/purple-light */
      background: ${theme.colors.purpleLight};
      box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
      border-radius: 0.6rem;
      border: none;

      /* Inside auto layout */
      flex: none;
      order: 0;
      flex-grow: 0;

      > span {
        width: 9.4rem;
        height: 2.4rem;

        font-style: normal;
        font-weight: ${theme.fontTypes.bold};
        font-size: 1.6rem;
        line-height: 150%;
        text-transform: uppercase;
        color: ${theme.colors.gray40};

        flex: none;
        order: 1;
        flex-grow: 0;
      }
    }
  `}
`;
