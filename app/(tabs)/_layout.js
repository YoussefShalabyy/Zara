import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <Fontisto name="home" size={24} color="black" />,
          tabBarLabel: "",
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => <Fontisto name="search" size={24} color="black" />,
          tabBarLabel: "",
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          tabBarIcon: () => (
            <Fontisto name="shopping-bag" size={24} color="black" />
          ),
          tabBarLabel: "",
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
          tabBarLabel: "",
          headerShown:false,
        }}
      />
      <Tabs.Screen
        name="addItem"
        options={{
          tabBarIcon: () => <AntDesign name="pluscircle" size={24} color="black" />,
          tabBarLabel: "",
          headerShown:false,
        }}
      />
    </Tabs>
  );
}
