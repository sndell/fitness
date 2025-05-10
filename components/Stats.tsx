import Monicon from "@monicon/native";
import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, Text, TouchableOpacity, View } from "react-native";

export const Stats = () => {
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <View className="flex flex-col gap-4 p-4">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-end gap-2">
          <Text className="text-2xl font-nunito-bold">Today</Text>
          <Text className="text-base font-nunito-semibold text-secondary pb-[1px]">{currentDate}</Text>
        </View>
        <TouchableOpacity className="flex flex-row items-center gap-2 px-3 py-2 border rounded-full border-primary">
          <Monicon name="solar:pen-linear" size={16} />
          <Text className=" font-nunito-semibold">Edit</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row gap-2">
        <View className="flex flex-1 gap-2">
          <View className="flex items-center justify-center flex-1 border bg-primary border-primary rounded-2xl">
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
        <View className="flex flex-col gap-2 w-[40%]">
          <ProgressItem label="Protein" current={60} max={170} color="orange" />
          <ProgressItem label="Carbs" current={50} max={70} color="green" />
          <ProgressItem label="Fats" current={40} max={50} color="blue" />
        </View>
      </View>
    </View>
  );
};

const ProgressItem = ({
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
    <View className="flex flex-col items-center gap-2 p-4 bg-white border rounded-2xl border-primary">
      <View className="flex flex-row items-end justify-between w-full">
        <Text className="text-center font-nunito-bold" style={{ color: colors[color][0] }}>
          {label}
        </Text>
        <Text className="text-sm text-secondary font-nunito-semibold">
          {current} / {max}g
        </Text>
      </View>
      <View className="relative w-full h-2 overflow-hidden rounded-full bg-bar">
        <LinearGradient
          colors={[colors[color][0], colors[color][1]]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="absolute inset-0 top-0 left-0 h-full overflow-hidden rounded-full"
          style={{ width: `${(current / max) * 100}%` }}
        />
        {/* <View
          className="absolute inset-0 top-0 left-0 h-full rounded-full"
          style={{ width: `${(current / max) * 100}%`, backgroundColor: colors[color] }}
        /> */}
      </View>
    </View>
  );
};
