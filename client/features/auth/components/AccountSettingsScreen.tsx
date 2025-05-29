import { authClient } from "@/lib/auth-client";
import Monicon from "@monicon/native";
import { Pressable, Text, View } from "react-native";

export const AccountSettingsScreen = () => {
  const { data: session } = authClient.useSession();

  const handleLogout = () => authClient.signOut();

  return (
    <View className="p-3 ">
      <View className="border bg-primary rounded-2xl border-primary">
        <View className="p-3">
          <Text className="text-sm text-secondary font-nunito-semibold">Email</Text>
          <Text className="text-primary font-nunito-semibold">{session?.user?.email}</Text>
        </View>
        <View className="h-px bg-bar" />
        <View className="p-3">
          <Text className="text-sm text-secondary font-nunito-semibold">Name</Text>
          <Text className="text-primary font-nunito-semibold">{session?.user?.name}</Text>
        </View>
      </View>
      <Pressable
        onPress={handleLogout}
        className="flex-row items-center justify-center gap-2 p-3 mt-3 border bg-primary rounded-2xl border-primary"
      >
        <Monicon name="solar:logout-2-linear" size={16} color="#000000" />
        <Text className="text-primary font-nunito-semibold">Logout</Text>
      </Pressable>
    </View>
  );
};
