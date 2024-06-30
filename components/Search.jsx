import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";


export default function Search(props) {
  return (
    <View style={styles.search}>
    <FontAwesome name="search" size={24} color="black" />
    <TextInput
      placeholder="Search Product, Category or Brand"
      onChangeText={props.onChangeText}
      value={props.value}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  search: {
    alignItems: "center",
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    padding: "3%",
    gap: "7%",
    borderWidth: 1,
  },
});
