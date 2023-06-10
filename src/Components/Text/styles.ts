import styled, { css } from 'styled-components';
import { StyleClosetTheme } from '../../styles/theme';

interface Text {
  theme: StyleClosetTheme;
  isDark: boolean;
  isUppercase: boolean;
  isBold: boolean;
}

export const Text =  styled.p`
  ${({ theme, isDark = false, isUppercase, isBold = false}: Text) => css`
    height: 2.4rem;

    font-style: normal;
    font-weight: ${isBold ? 700 : 400};
    line-height: 150%;
    text-transform: ${isUppercase ? 'uppercase' : 'none'};
    color: ${isDark ? theme.colors.gray40 : theme.colors.white};

    flex: none;
    order: 1;
    flex-grow: 0;
  `};
`;
