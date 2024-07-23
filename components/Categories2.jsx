import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { categories } from "../constants/consts";

const Categ = () => {
  const rows = [];
  for (let i = 0; i < categories.length; i += 2) {
    if (i === categories.length - 1) {
      rows.push(
        <View key={i} style={styles.row}>
          <View style={styles.itemFull}>
            <Image source={categories[i].uri} style={styles.imageFull} />
            <Text
              style={{
                position: "absolute",
                left: 20,
                color: "#fff",
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {categories[i].title}
            </Text>
          </View>
        </View>
      );
    } else {
      rows.push(
        <View key={i} style={styles.row}>
          <View style={styles.item}>
            <Image source={categories[i].uri} style={styles.image} />
            <Text
              style={{
                position: "absolute",
                left: 20,
                color: "#fff",
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {categories[i].title}
            </Text>
          </View>
          {i + 1 < categories.length && (
            <View style={styles.item}>
              <Image source={categories[i + 1].uri} style={styles.image} />
              <Text
                style={{
                  position: "absolute",
                  left: 20,
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                {categories[i + 1].title}
              </Text>
            </View>
          )}
        </View>
      );
    }
  }
  return rows;
};
export default Categ;

const styles = StyleSheet.create({
  plusIcon: {
    position: "absolute",
    top: "50%",
    right: 0, // Adjust as needed
    transform: [{ translateY: -12 }], // Center the icon vertically
  },
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
  itemFull: {
    flex: 1,
    justifyContent: "center",
    margin: 5,
    width: "100%",
  },
  image: {
    height: 110,
    width: "100%",
  },
  imageFull: {
    height: 110,
    width: "100%",
  },
});
