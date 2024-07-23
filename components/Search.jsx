import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Octicons } from "@expo/vector-icons";

export default function Search(props) {
  return (
    <View style={[styles.search, props.style]}>
      <Octicons
        name="search"
        size={24}
        style={{ marginRight: 10 }}
        color="black"
      />
      <TextInput
        placeholder="Start typing to search"
        style={styles.textInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor="#D3D3D3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderColor: "grey",
    marginTop: 10,
    backgroundColor: colors.LightGray,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textInput: {
    fontSize: 20,
    flex: 1,
  },
});
