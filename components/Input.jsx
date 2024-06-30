import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#999"
        value={props.value}
        onChangeText={props.onChangeText}
        style={[styles.input, props.style]}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    minWidth:"80%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
