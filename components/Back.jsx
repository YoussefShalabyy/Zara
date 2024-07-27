import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
const Back = () => {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: "white",
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#C0C0C0",
      }}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({});
