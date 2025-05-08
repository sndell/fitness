import "@/styles/global.css";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="about" options={{ title: "About", headerShown: false }} />
    </Tabs>
  );
}
