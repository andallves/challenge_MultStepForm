const colors = {
  purpleMid: '#633BBC',
  purbleLight: '#8257E5',
  white: '#FFFFFF',
  gray10: '#E1E1E6',
  gray20: '#8D8D99',
  gray30: '#7C7C8a',
  gray40: '#323228',
  sucessColor: '#1D8841',
};
const fontFamily = {
  defaultFont: "'IBM Plex Sans', sans-serif",
};

const fontTypes = {
  regular: 400,
  bold: 700,
};

interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  fontFamily: { [key in keyof typeof fontFamily]: string };
  fontTypes: { [key in keyof typeof fontTypes]: number };
}

const theme: StyleClosetTheme = { colors, fontFamily, fontTypes };

export { theme, StyleClosetTheme };
