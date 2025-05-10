import { Stats } from "@/components/Stats";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function Home() {
  return (
    <View>
      <LinearGradient
        colors={["#ffffff", "#f5f5f5"]}
        className="h-full"
        start={{ x: 0.5, y: 0.4 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <Stats />
      </LinearGradient>
    </View>
  );
}
