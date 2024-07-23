import { View, Text } from "react-native";
import React from "react";
import Categ from "./Categories2";

export default function ShopByCategory() {
  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          marginBottom: 10,
          marginLeft: 30,
          marginTop: 30,
          fontSize: 30,
          fontWeight: "600",
          fontFamily: "b",
        }}
      >
        Shop By Category
      </Text>
      <Categ />
    </View>
  );
}
