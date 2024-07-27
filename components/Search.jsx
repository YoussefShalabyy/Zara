import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Search(props) {
  return (
    <View
      style={[
        styles.search,
        props.style,
        {
          marginTop: props.screen && 10,
          borderBottomColor: props.screen && "#C0C0C0",
        },
      ]}
    >
      <SimpleLineIcons
        name="magnifier"
        style={{ marginLeft: 15, marginRight: 5 }}
        size={24}
        color="#505050"
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
    backgroundColor: colors.LightGray,
    borderBottomWidth: 0.6,
    borderBottomColor: "black",
  },
  textInput: {
    fontSize: 18,
    flex: 1,
    fontFamily: "c",
  },
});
