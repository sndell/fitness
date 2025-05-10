import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import { Fragment, useEffect, useState } from "react";
import { View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { PlusButton } from "../PlusButton";
import { TabBarButton } from "./TabBarButton";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const tabBarPositionX = useSharedValue(0);

  const MIDDLE_BUTTON_INDEX = 2;
  const totalElements = state.routes.length + 1;
  const gapSize = 4;
  const buttonWidth = tabBarWidth > 0 ? (tabBarWidth - gapSize * (totalElements - 1)) / totalElements : 0;

  useEffect(() => {
    if (!tabBarWidth) return;

    const adjustedIndex = state.index >= MIDDLE_BUTTON_INDEX ? state.index + 1 : state.index;
    tabBarPositionX.value = withSpring(adjustedIndex * (buttonWidth + gapSize), { duration: 500 });
  }, [buttonWidth, state.index, tabBarWidth, MIDDLE_BUTTON_INDEX, gapSize, tabBarPositionX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: tabBarPositionX.value }],
    width: buttonWidth,
  }));

  return (
    <View className="absolute left-0 right-0 items-center justify-center bottom-10">
      <View className="p-1 overflow-hidden bg-black rounded-full">
        <View onLayout={(e) => setTabBarWidth(e.nativeEvent.layout.width)} className="flex-row gap-1">
          <Animated.View style={[indicatorStyle]} className="absolute h-full rounded-full bg-neutral-700" />

          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            return (
              <Fragment key={route.key}>
                {index === MIDDLE_BUTTON_INDEX && <PlusButton />}
                <TabBarButton
                  href={buildHref(route.name, route.params)}
                  isFocused={isFocused}
                  onPress={onPress}
                  routeName={route.name}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarButtonTestID}
                />
              </Fragment>
            );
          })}
        </View>
      </View>
    </View>
  );
}
