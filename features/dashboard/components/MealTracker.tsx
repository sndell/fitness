import { ProgressRing } from "@/components/ProgressRing";
import Monicon from "@monicon/native";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const NUTRITION_COLORS = {
  protein: "#FFB34E",
  carbs: "#47e959",
  fat: "#4CC7FC",
} as const;

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 150,
};

export const MealTracker = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = (event: any) => {
    setIsAtTop(event.nativeEvent.contentOffset.y <= 0);
  };

  return (
    <View className="flex-1 px-4">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ gap: 8, paddingBottom: 112 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <Meal key={i} />
        ))}
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

const NutritionItem = ({
  label,
  value,
  percentage,
  color,
}: {
  label: string;
  value: string;
  percentage: string;
  color: string;
}) => (
  <View className="flex flex-col items-center">
    <Text className="font-nunito-semibold text-primary">{value}</Text>
    <Text className="font-nunito-bold" style={{ color }}>
      {label}
    </Text>
    <Text className="text-sm font-nunito-semibold text-secondary">{percentage}</Text>
  </View>
);

export const Meal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rotation = useSharedValue(0);
  const marginTop = useSharedValue(0);

  const toggleMeal = () => {
    Haptics.selectionAsync();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const target = isOpen ? { h: 130, o: 1, r: 90, m: 12 } : { h: 0, o: 0, r: 0, m: 0 };

    height.value = withSpring(target.h, { ...SPRING_CONFIG, overshootClamping: !isOpen });
    opacity.value = withSpring(target.o, SPRING_CONFIG);
    rotation.value = withSpring(target.r, { ...SPRING_CONFIG, stiffness: 250 });
    marginTop.value = withSpring(target.m, {
      damping: 20,
      stiffness: 200,
      overshootClamping: true,
    });
  }, [isOpen]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    height: Math.max(0, height.value),
    opacity: opacity.value,
    marginTop: Math.max(0, marginTop.value),
    overflow: "hidden",
  }));

  const animatedArrowStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View className="p-4 border rounded-2xl bg-primary border-primary">
      <View className="flex flex-row">
        <View className="flex flex-1 gap-2">
          <Text className="font-nunito-bold">Köttfärsbiffar med potatis och grönsaker</Text>
          <View className="flex flex-row gap-2">
            {["Lunch", "11:30", "500 kcal", "200g"].map((tag) => (
              <Text
                key={tag}
                className="px-3 py-1 text-sm border rounded-full font-nunito-semibold text-secondary border-primary"
              >
                {tag}
              </Text>
            ))}
          </View>
        </View>
        <View className="flex items-center justify-center aspect-square">
          <TouchableOpacity className="p-3 border rounded-full border-primary" onPress={toggleMeal}>
            <Animated.View style={animatedArrowStyle}>
              <Monicon name="solar:alt-arrow-right-linear" size={16} />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View style={animatedContainerStyle}>
        <View className="flex flex-col" style={{ gap: 12 }}>
          <View className="flex flex-row gap-4">
            <ProgressRing />
            <View className="flex flex-col flex-1 gap-2">
              <View
                className="flex flex-row items-center justify-around border border-primary rounded-2xl"
                style={{ paddingVertical: 12 }}
              >
                <NutritionItem label="Protein" value="25g" percentage="25%" color={NUTRITION_COLORS.protein} />
                <NutritionItem label="Carbs" value="25g" percentage="25%" color={NUTRITION_COLORS.carbs} />
                <NutritionItem label="Fat" value="25g" percentage="25%" color={NUTRITION_COLORS.fat} />
              </View>
            </View>
          </View>
          <TouchableOpacity className="flex flex-row items-center justify-center gap-2 px-3 py-2 border rounded-2xl border-primary">
            <Monicon name="solar:pen-linear" size={16} />
            <Text className="font-nunito-semibold">Edit meal</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
