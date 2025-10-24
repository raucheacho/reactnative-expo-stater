import { getSupabaseClient } from "@/supabase-utils/supabase-client";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");

  async function login() {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (!error) {
      alert("Vérifie ton e-mail pour le lien magique ✉️");
    } else {
      alert(error.message);
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Ton email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Se connecter" onPress={login} />
    </View>
  );
}
