// app/_layout.tsx
import { useThemeStore } from "@/stores/useThemeStore";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
  const hydrate = useThemeStore((state) => state.hydrate);
  const theme = useThemeStore((state) => state.theme);

  const [fontsLoaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Hydrate the theme store on initial load
  useEffect(() => {
    hydrate();
  }, [hydrate]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
