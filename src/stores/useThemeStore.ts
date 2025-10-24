// src/stores/useThemeStore.ts
import * as SecureStore from "expo-secure-store";
import { colorScheme as nativewindColorScheme } from "nativewind";
import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  hydrate: () => Promise<void>;
}

const STORAGE_KEY = "APP_THEME";

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",

  setTheme: (theme) => {
    nativewindColorScheme.set(theme);
    SecureStore.setItemAsync(STORAGE_KEY, theme);
    set({ theme });
  },

  toggleTheme: () => {
    const current = get().theme;
    const next = current === "light" ? "dark" : "light";
    get().setTheme(next);
  },

  hydrate: async () => {
    const stored = await SecureStore.getItemAsync(STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      get().setTheme(stored);
    }
  },
}));
