import { Dashboard } from "@/features/dashboard";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function Home() {
  return (
    <View>
      <LinearGradient
        colors={["#ffffff", "#f5f5f5"]}
        className="h-full"
        start={{ x: 0.5, y: 0.2 }}
        end={{ x: 0.5, y: 0.7 }}
      >
        <Dashboard />
      </LinearGradient>
    </View>
  );
}
