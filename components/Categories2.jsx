import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { categories } from "../constants/consts";
import { router } from "expo-router";

const CategoryItem = ({ category }) => (
  <Pressable
    onPress={() => {
      router.navigate({
        pathname: "search",
        params: { page: category.title },
      });
    }}
    style={styles.item}
  >
    <Image source={category.uri} style={styles.image} />
    <Text style={styles.text}>{category.title}</Text>
  </Pressable>
);

const Categ = () => {
  return categories.map((category, index) => {
    if (index % 2 === 0) {
      const nextCategory = categories[index + 1];
      return (
        <View key={category.title} style={styles.row}>
          <CategoryItem category={category} />
          {nextCategory && <CategoryItem category={nextCategory} />}
        </View>
      );
    }
    return null;
  });
};

export default Categ;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image: {
    height: 110,
    width: "100%",
  },
  text: {
    position: "absolute",
    left: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});
