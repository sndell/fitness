import { authClient } from "@/lib/auth-client";
import { Fragment } from "react";
import { Alert, Button, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";

export const AuthTest = () => {
  const session = authClient.useSession();

  const handleLogin = async () => {
    try {
      console.log("Starting login...");
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      console.log("Login completed");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const debugSession = async () => {
    const stored = await SecureStore.getItemAsync("fitness-app.session");
    const cookies = await authClient.getCookie();
    const session = await authClient.getSession();

    console.log("Stored session:", stored);
    console.log("Cookies:", cookies);
    console.log("Current session:", session);
  };

  const testFetch = async () => {
    const response = await fetch("https://test.sundell.dev/");
    const data = await response.json();
    Alert.alert(JSON.stringify(data));
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <View>
      {session.data?.user ? (
        <Fragment>
          <Text>{session.data.user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </Fragment>
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      <Button title="Test Fetch" onPress={testFetch} />
      <Button title="Debug Session" onPress={debugSession} />
    </View>
  );
};
