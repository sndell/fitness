import "@/styles/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";

export default function RootLayout() {
  return (
    <Fragment>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="products/[id]" options={{ title: "Product" }} />
      </Stack>
      <StatusBar style="auto" translucent={false} backgroundColor="black" />
    </Fragment>
  );
}
