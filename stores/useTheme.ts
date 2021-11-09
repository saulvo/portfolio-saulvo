import { ThemeState } from '@/modals/theme';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useTheme = create<ThemeState>(
  persist(
    (set) => ({
      theme: 'dark',
      updateTheme: (value: 'light' | 'dark') =>
        set({
          theme: value,
        }),
    }),
    {
      name: 'theme',
    },
  ),
);
