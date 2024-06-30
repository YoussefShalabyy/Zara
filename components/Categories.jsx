import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Category from "./Category";

export default function Categories(props) {
  const [selectedCategory, setSelectedCategory] = useState("MAN");

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <Category
        text="MAN"
        selected={selectedCategory === "MAN"}
        onPress={() => handleCategoryPress("MAN")}
      />
      <Category
        text="WOMAN"
        selected={selectedCategory === "WOMAN"}
        onPress={() => handleCategoryPress("WOMAN")}
      />
      <Category
        text="KIDS"
        selected={selectedCategory === "KIDS"}
        onPress={() => handleCategoryPress("KIDS")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    marginTop: "1%",
  },
});
