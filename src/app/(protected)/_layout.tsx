import { useSession } from "@/supabase-utils/supabase-auth";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function ProtectedLayout() {
  const { isAuthenticated, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/(auth)/login");
    }
  }, [loading, isAuthenticated, router]);

  if (loading) return null;

  return <Stack />;
}
