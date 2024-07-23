import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Categories from "../../components/Categories";

export default function bag() {
  return (
    <View style={styles.container}>
      <Categories />
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
