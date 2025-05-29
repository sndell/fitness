import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "http://192.168.0.152:8787",
  plugins: [
    expoClient({
      scheme: "fitness-app",
      storagePrefix: "fitness-app",
      storage: SecureStore,
    }),
  ],
});
