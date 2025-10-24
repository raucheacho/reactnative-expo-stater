import { useThemeStore } from "@/stores/useThemeStore";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <SafeAreaView
      className={`flex-1 ${
        theme === "dark" ? "bg-black" : "bg-white"
      } items-center justify-center`}
    >
      <Pressable onPress={toggleTheme}>
        <Text className={`${theme === "dark" ? "text-white" : "text-black"}`}>
          Changer de thème
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
