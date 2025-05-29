import Monicon from "@monicon/native";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export const AccountButton = () => {
  return (
    <Link href="/settings/account">
      <View className="flex-row items-center justify-between gap-2 p-4 border bg-primary rounded-2xl border-primary">
        <Text className="flex-1 text-primary font-nunito-semibold">Account</Text>
        <View className="flex-row items-center h-full gap-2 bg-primary rounded-2xl">
          <Monicon name="solar:alt-arrow-right-linear" size={16} color="#000000" />
        </View>
      </View>
    </Link>
  );
};
