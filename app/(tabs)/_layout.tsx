import { TabBar } from "@/components/ui/TabBar";
import "@/styles/global.css";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="saved" options={{ title: "Saved", headerShown: false }} />
      <Tabs.Screen name="stats" options={{ title: "Stats", headerShown: false }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", headerShown: false }} />
    </Tabs>
  );
}
