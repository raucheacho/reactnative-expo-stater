import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import "react-native-url-polyfill/auto";

// Supabase SecureStore adapter
const ExpoSecureStoreAdapter = {
  async getItem(key: string) {
    return await SecureStore.getItemAsync(key);
  },
  async setItem(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  },
  async removeItem(key: string) {
    await SecureStore.deleteItemAsync(key);
  },
};

export const getSupabaseClient = () => {
  return createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_ANON_KEY || "",
    {
      auth: {
        storage: ExpoSecureStoreAdapter,
        storageKey: "supabase.auth.token",
        autoRefreshToken: true,
        persistSession: true,
      },
    }
  );
};
