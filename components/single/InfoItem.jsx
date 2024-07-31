import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import colors from "../../constants/colors";

const InfoItem = (props) => {
  return (
    <Pressable style={styles.pressable} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 12, marginRight: 5, color: "#707070" }}>
          {props.secondText}
        </Text>
        <SimpleLineIcons name="arrow-right" size={20} color="black" />
      </View>
    </Pressable>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 20,
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
    fontSize: 16,
  },
});
