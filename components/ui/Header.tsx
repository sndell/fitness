import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header = () => {
  return (
    <SafeAreaView className="flex flex-row items-center justify-center p-5 border-b border-primary bg-primary">
      <Text className="text-2xl font-nunito-bold">GigaFitness</Text>
    </SafeAreaView>
  );
};
