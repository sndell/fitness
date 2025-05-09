import { Text, View } from "react-native";

export const Header = () => {
  return (
    <View className="flex flex-row items-center justify-center p-4 border-b border-neutral-200">
      <Text className="text-2xl font-bold">Fitness</Text>
    </View>
  );
};
