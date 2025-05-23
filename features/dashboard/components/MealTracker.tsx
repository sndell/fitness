import { ProgressRing } from "@/components/ProgressRing";
import Monicon from "@monicon/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, TouchableOpacity, View } from "react-native";

export const MealTracker = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setIsAtTop(scrollY <= 0);
  };

  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ gap: 8, paddingBottom: 112 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
      </ScrollView>
      {!isAtTop && (
        <LinearGradient
          pointerEvents="none"
          colors={["#fcfcfc", "rgba(0, 0, 0, 0)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute top-0 left-0 right-0 h-8"
        />
      )}
      <LinearGradient
        pointerEvents="none"
        colors={["rgba(0, 0, 0, 0)", "#f6f6f6"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0 left-0 right-0 h-4"
      />
    </View>
  );
};

export const Meal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const colors: { [key: string]: string } = {
    orange: "#FFB34E",
    green: "#47e959",
    blue: "#4CC7FC",
  };

  return (
    <View className="flex gap-3 p-4 border rounded-2xl bg-primary border-primary">
      <View className="flex flex-row">
        <View className="flex flex-1 gap-2">
          <Text className="font-nunito-bold">Köttfärsbiffar med potatis och grönsaker</Text>
          <View className="flex flex-row gap-2">
            <Text className="px-3 py-1 text-sm border rounded-full font-nunito-semibold text-secondary border-primary">
              Lunch
            </Text>
            <Text className="px-3 py-1 text-sm border rounded-full font-nunito-semibold text-secondary border-primary">
              11:30
            </Text>
            <Text className="px-3 py-1 text-sm border rounded-full font-nunito-semibold text-secondary border-primary">
              500 kcal
            </Text>
            <Text className="px-3 py-1 text-sm border rounded-full font-nunito-semibold text-secondary border-primary">
              200g
            </Text>
          </View>
        </View>
        <View className="flex items-center justify-center aspect-square">
          <TouchableOpacity className="p-3 border rounded-full border-primary" onPress={() => setIsOpen(!isOpen)}>
            <Monicon name="solar:alt-arrow-right-linear" size={16} />
          </TouchableOpacity>
        </View>
      </View>
      {isOpen && (
        <View className="flex flex-col gap-3">
          <View className="flex flex-row flex-1 gap-4">
            <ProgressRing />
            <View className="flex flex-col flex-1 gap-2">
              <View className="flex flex-row items-center justify-around flex-1 border border-primary rounded-2xl">
                <View className="flex flex-col items-center ">
                  <Text className="font-nunito-semibold text-primary">25g</Text>
                  <Text className="font-nunito-bold" style={{ color: colors.orange }}>
                    Protein
                  </Text>
                  <Text className="text-sm font-nunito-semibold text-secondary">25%</Text>
                </View>
                <View className="flex flex-col items-center ">
                  <Text className="font-nunito-semibold text-primary">25g</Text>
                  <Text className="font-nunito-bold" style={{ color: colors.green }}>
                    Carbs
                  </Text>
                  <Text className="text-sm font-nunito-semibold text-secondary">25%</Text>
                </View>
                <View className="flex flex-col items-center ">
                  <Text className="font-nunito-semibold text-primary">25g</Text>
                  <Text className="font-nunito-bold" style={{ color: colors.blue }}>
                    Fat
                  </Text>
                  <Text className="text-sm font-nunito-semibold text-secondary">25%</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity className="flex flex-row items-center justify-center gap-2 px-3 py-2 border rounded-2xl border-primary">
            <Monicon name="solar:pen-linear" size={16} />
            <Text className=" font-nunito-semibold">Edit meal</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
