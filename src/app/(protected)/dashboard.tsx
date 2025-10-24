import { getSupabaseClient } from "@/supabase-utils/supabase-client";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Dashboard() {
  const router = useRouter();

  async function logout() {
    const supabase = getSupabaseClient();
    await supabase.auth.signOut();
    router.replace("/login");
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue sur ton dashboard sécurisé 🔐</Text>
      <Button title="Se déconnecter" onPress={logout} />
    </View>
  );
}
