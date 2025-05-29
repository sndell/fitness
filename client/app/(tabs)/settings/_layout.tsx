import "@/styles/global.css";
import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Settings", headerShown: true }} />
      <Stack.Screen name="account" options={{ title: "Account", headerShown: true }} />
    </Stack>
  );
}
