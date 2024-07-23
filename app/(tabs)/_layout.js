import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={24} color="black" />
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => <SimpleLineIcons name="magnifier" size={24} color="black" />,
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="bag" size={24} color="black" />
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="user" size={24} color="black" />
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="addItem"
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="plus" size={24} color="black" />
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
