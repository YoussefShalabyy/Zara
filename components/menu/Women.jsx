import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import colors from "../../constants/colors";

const MenuItem = ({ text, source }) => {
  return (
    <Pressable style={styles.pressable}>
      <View style={styles.row}>
        <Image source={source} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <SimpleLineIcons name="arrow-right" size={15} color="black" />
    </Pressable>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.DarkerGrey,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  text: {
    marginLeft: 15,
    fontFamily: "Light",
    fontFamily: "Medium",
  },
});
