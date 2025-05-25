import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, Text, View } from "react-native";

export const IntakeTracker = () => {
  return (
    <View className="flex flex-col gap-2 px-4">
      <View className="flex items-center gap-2 py-8">
        <View className="flex items-center justify-center bg-primary rounded-2xl">
          <Text className="text-5xl font-nunito-bold">
            600<Text className="text-sm font-nunito-semibold text-secondary"> / 1800</Text>
          </Text>
          <Text className="text-sm font-nunito-semibold text-secondary">kcal eaten</Text>
        </View>

        {/* <View className="border py-[16.5px] border-primary rounded-2xl bg-primary">
          <Text className="text-sm text-center font-nunito-semibold text-secondary">
            <Text className="text-2xl font-nunito-bold text-primary">1200</Text> kcal remaining
          </Text>
        </View> */}
      </View>
      <View className="flex flex-row gap-2">
        <MacroTracker label="Protein" current={60} max={170} color="orange" />
        <MacroTracker label="Carbs" current={50} max={70} color="green" />
        <MacroTracker label="Fats" current={40} max={50} color="blue" />
      </View>
    </View>
  );
};

const MacroTracker = ({
  label,
  color,
  max,
  current,
}: {
  label: string;
  color: "orange" | "green" | "blue";
  current: number;
  max: number;
}) => {
  const colors: { [key: string]: ColorValue[] } = {
    orange: ["#ff774e", "#FFB34E"],
    green: ["#31aa40", "#4CFC61"],
    blue: ["#3283a7", "#4CC7FC"],
  };
  return (
    <View className="flex flex-col items-center flex-1 gap-2 p-4 bg-white border rounded-2xl border-primary">
      <Text className="text-center font-nunito-bold" style={{ color: colors[color][0] }}>
        {label}
      </Text>

      <View className="relative w-full h-2 overflow-hidden rounded-full bg-bar">
        <LinearGradient
          colors={[colors[color][0], colors[color][1]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="absolute inset-0 top-0 left-0 h-full overflow-hidden rounded-full"
          style={{ width: `${(current / max) * 100}%` }}
        />
      </View>
      <Text className="text-sm text-secondary font-nunito-semibold">
        {current} / {max}g
      </Text>
    </View>
  );
};
