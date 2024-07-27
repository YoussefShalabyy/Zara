import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function OfferCategory(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text>{props.text}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#C0C0C0",
  },
});
