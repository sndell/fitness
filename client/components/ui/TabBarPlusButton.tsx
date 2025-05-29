import Monicon from "@monicon/native";
import { Pressable } from "react-native";

type Props = {
  toggleMenu: () => void;
};

export const TabBarPlusButton = ({ toggleMenu }: Props) => {
  return (
    <Pressable
      onPressIn={toggleMenu}
      android_ripple={{ color: "#0000004f" }}
      className="relative p-5 bg-white rounded-full"
    >
      <Monicon name="solar:add-circle-bold" size={24} color="#000000" />
    </Pressable>
  );
};
