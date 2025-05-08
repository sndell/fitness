import { Header } from "@/components/ui/Header";
import { products } from "@/data/products";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="h-full bg-white">
      <Header />
      <FlatList
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        ItemSeparatorComponent={() => <View className="h-2" />}
        contentContainerStyle={{ padding: 8 }}
        className="flex-1"
      />
    </SafeAreaView>
  );
}

const Product = ({ product }: { product: Product }) => {
  return (
    <Link href={{ pathname: "/products/[id]", params: { id: product.id } }}>
      <View className="flex flex-row items-center justify-between w-full px-6 py-4 border rounded-full bg-neutral-100 border-neutral-200">
        <View>
          <Text className="text-lg">{product.name}</Text>
          <Text>{product.category}</Text>
        </View>
        <Text className="w-20 py-2 font-bold text-center bg-white border rounded-full border-neutral-200 ">
          ${product.price}
        </Text>
      </View>
    </Link>
  );
};
