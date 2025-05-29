import { router } from "expo-router";
import { authClient } from "@/lib/auth-client";
import { Monicon } from "@monicon/native";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

export default function Auth() {
  const { data: session } = authClient.useSession();
  const [awaitingRedirect, setAwaitingRedirect] = useState(false);

  useEffect(() => {
    if (session) router.replace("/");
  }, [session]);

  const handleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/auth",
      });
      setAwaitingRedirect(true);
    } catch (error: any) {
      Alert.alert(error.message);
      setAwaitingRedirect(false);
    }
  };

  if (awaitingRedirect) return <LoadingScreen />;

  return (
    <LinearGradient
      colors={["#ffffff", "#f5f5f5"]}
      className="h-full"
      start={{ x: 0.5, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
    >
      <SafeAreaView className="flex-1 px-3">
        <View className="flex flex-col items-center justify-center flex-1 gap-2">
          <Text className="text-5xl font-nunito-bold">Welcome</Text>
          <Text className="font-nunito-semibold text-secondary">Sign in to continue</Text>
        </View>
        <Pressable
          onPress={handleLogin}
          className="flex-row items-center justify-center gap-2 py-3 border bg-primary rounded-2xl border-primary"
        >
          <Monicon name="logos:google-icon" size={24} color="#4285F4" />
          <Text className="font-nunito-semibold text-secondary">Continue with Google</Text>
        </Pressable>
        <View className="flex-1" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const LoadingScreen = () => {
  return (
    <LinearGradient
      colors={["#ffffff", "#f5f5f5"]}
      className="h-full"
      start={{ x: 0.5, y: 0.3 }}
      end={{ x: 0.5, y: 0.7 }}
    >
      <SafeAreaView className="flex-1 px-3">
        <View className="flex flex-col items-center justify-center flex-1 gap-2">
          <ActivityIndicator size="large" color="#000000" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
