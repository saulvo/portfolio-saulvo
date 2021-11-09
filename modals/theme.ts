export type ThemeState = {
  theme: 'light' | 'dark';
  updateTheme: (value: string) => void;
};