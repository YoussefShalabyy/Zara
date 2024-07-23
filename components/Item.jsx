import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = 350; // Fixed height for all images
export default function Item({ item }) {
  return (
    <View>
      <Image
        source={{ uri: item.uri }}
        style={{ width: width, height: IMAGE_HEIGHT }}
      />
      <View
        style={{
          position: "relative",
          marginTop: -20,
          marginHorizontal: 30,
          padding: 30,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: -20,
            marginBottom: 10,
          }}
        >
          {item.text1}
        </Text>
        <Text style={{ fontWeight: "500" }}>{item.text2}</Text>
      </View>
    </View>
  );
}
