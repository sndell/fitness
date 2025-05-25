import { Monicon } from "@monicon/native";
import { PlatformPressable } from "@react-navigation/elements";
import { useEffect } from "react";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const ICONS = {
  index: ["solar:home-2-linear", "solar:home-2-bold"],
  saved: ["solar:notebook-linear", "solar:notebook-bold"],
  stats: ["solar:chart-square-linear", "solar:chart-square-bold"],
  settings: ["solar:settings-linear", "solar:settings-bold"],
};

type TabBarButtonProps = {
  isFocused: boolean;
  href?: string;
  accessibilityLabel?: string;
  testID?: string;
  onPress: () => void;
  routeName: string;
};

export const TabBarButton = ({
  isFocused,
  href,
  accessibilityLabel,
  testID,
  onPress,
  routeName,
}: TabBarButtonProps) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 300 });
  }, [isFocused]);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(scale.value, [0, 1], [1, 1.2]) }],
  }));

  const icons = ICONS[routeName as keyof typeof ICONS];
  const iconName = icons[isFocused ? 1 : 0];
  const iconColor = isFocused ? "#ffffff" : "#8d8d8d";

  return (
    <PlatformPressable
      onTouchStart={onPress}
      href={href}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      // onPress={onPress}
      className="items-center justify-center h-full p-5 rounded-full aspect-square"
    >
      <Animated.View style={iconStyle}>
        <Monicon name={iconName} size={24} color={iconColor} />
      </Animated.View>
    </PlatformPressable>
  );
};
