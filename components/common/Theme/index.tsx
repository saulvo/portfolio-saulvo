import { darkTheme, lightTheme } from '@/contants/theme';
import { ThemeState } from '@/modals/theme';
import { useTheme } from '@/stores';
import { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

function Theme({ children }) {
  const theme = useTheme((state: ThemeState) => state.theme);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <ThemeProvider
      theme={{ mode: currentTheme, global: currentTheme === 'light' ? lightTheme : darkTheme }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.global.color};
    background-color: ${({ theme }) => theme.global.background};
    transition: all 0.2s;
  }
`;
