import { Dashboard } from "@/features/dashboard";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#ffffff", "#f5f5f5"]}
        className="h-full"
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 0.7 }}
      >
        <Dashboard />
      </LinearGradient>
    </SafeAreaView>
  );
}
