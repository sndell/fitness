import { TabBar } from "@/components/ui/TabBar";
import { authClient } from "@/lib/auth-client";
import "@/styles/global.css";
import { Redirect, Tabs } from "expo-router";

export default function TabLayout() {
  const { data: session } = authClient.useSession();
  if (!session) return <Redirect href="/auth" />;

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "GigaFitness", headerShown: false }} />
      <Tabs.Screen name="saved" options={{ title: "Saved", headerShown: false }} />
      <Tabs.Screen name="stats" options={{ title: "Stats", headerShown: false }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
    </Tabs>
  );
}
