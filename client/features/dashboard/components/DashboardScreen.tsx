import Monicon from "@monicon/native";
import { Text, TouchableOpacity, View } from "react-native";
import { IntakeTracker } from "./IntakeTracker";
import { MealTracker } from "./MealTracker";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// import { AuthTest } from "@/components/AuthTest";

export const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#ffffff", "#f5f5f5"]}
        className="h-full"
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 0.7 }}
      >
        <View className="flex flex-col flex-1 gap-4">
          {/* <AuthTest /> */}
          <DashboardHeader />
          <IntakeTracker />
          <MealTrackerHeader />
          <MealTracker />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export const DashboardHeader = () => {
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <View className="flex flex-row items-center justify-between p-4 border-b border-primary">
      <View className="flex flex-row items-end gap-2">
        <Text className="text-2xl font-nunito-bold">Today</Text>
        <Text className="text-base font-nunito-semibold text-secondary pb-[1px]">{currentDate}</Text>
      </View>
      <TouchableOpacity className="flex flex-row items-center gap-2 px-3 py-2 border rounded-full border-primary">
        <Monicon name="solar:pen-linear" size={16} />
        <Text className="font-nunito-semibold">Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MealTrackerHeader = () => (
  <View className="flex flex-row items-center justify-between px-4">
    <View className="flex flex-row items-end gap-2">
      <Text className="text-2xl font-nunito-bold">Meals</Text>
      <Text className="text-base font-nunito-semibold text-secondary pb-[1px]">0</Text>
    </View>
    {/* <TouchableOpacity className="flex flex-row items-center gap-2 px-3 py-2 border rounded-full border-primary">
      <Text className=" font-nunito-semibold">Add meal</Text>
    </TouchableOpacity> */}
  </View>
);
