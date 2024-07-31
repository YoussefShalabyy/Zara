import { router, Slot, Stack } from "expo-router";
import Favourite from "../components/Favourite";
import Back from "../components/Back";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="item/[id]"
        options={{
          title: "",
          headerRight: () => <Favourite />,
          headerLeft: () => <Back />,
        }}
      />
      <Stack.Screen
        name="item/deliveryInfo"
        options={{
          title: "Delivery Information",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <AntDesign name="arrowleft" size={30} color="black" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
