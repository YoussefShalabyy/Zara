import { Text, Pressable } from "react-native";
import React from "react";

export default function Category(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#ccc" : undefined },
        { padding: 10, borderBottomWidth: props.selected ? 1 : undefined },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: props.selected ? "600" : "300",
        }}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}
