import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";

export default function Btn(props) {
  return (
    <Pressable
      style={({ pressed }) => [
        props.ps,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      onPress={props.onPress}
    >
      {props.loading ? (
        <ActivityIndicator size={"small"} color={"white"} />
      ) : (
        <Text style={props.ts}>{props.text}</Text>
      )}
    </Pressable>
  );
}
