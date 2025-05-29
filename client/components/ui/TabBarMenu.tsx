import Monicon from "@monicon/native";
import { Text, View } from "react-native";
import OutsidePressHandler from "react-native-outside-press";

type Props = {
  close: () => void;
};

export const TabBarMenu = ({ close }: Props) => {
  return (
    <OutsidePressHandler onOutsidePress={close}>
      <View className="absolute w-64 -translate-x-1/2 border shadow-2xl bg-primary border-primary rounded-2xl bottom-10">
        <View className="flex-row items-center justify-between gap-2 p-3">
          <Monicon name="solar:add-square-linear" size={24} color="#000000" />
          <Text className="font-nunito-semibold">Create product</Text>
          <View className="w-6" />
        </View>
        <View className="h-px bg-bar" />
        <View className="flex-row items-center justify-between gap-2 p-3">
          <Monicon name="solar:oven-mitts-minimalistic-linear" size={24} color="#000000" />
          <Text className="font-nunito-semibold">Create meal</Text>
          <View className="w-6" />
        </View>
        <View className="h-px bg-bar" />
        <View className="flex-row items-center justify-between gap-2 p-3">
          <Monicon name="solar:donut-linear" size={24} color="#000000" />
          <Text className="font-nunito-semibold">Add meal</Text>
          <View className="w-6" />
        </View>
      </View>
    </OutsidePressHandler>
  );
};
