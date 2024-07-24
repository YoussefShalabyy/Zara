import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D32F2F",
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarLabel: "",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="menu" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="bag" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="user" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addItem"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="plus" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
