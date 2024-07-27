import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const Favourite = () => {
  const [Toggled, setToggled] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setToggled(!Toggled);
      }}
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
      {Toggled ? (
        <Ionicons name="heart-sharp" size={27} color="red" />
      ) : (
        <Ionicons name="heart-outline" size={27} color="#404040" />
      )}
    </TouchableOpacity>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
