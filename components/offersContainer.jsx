import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function OffersContainer({ onPress, toggleOffers }) {
  return (
    <View style={styles.offersContainer}>
      <Text style={[styles.offersText, { marginTop: 30 }]}>summer offers</Text>
      <Text style={[styles.offersText, { marginTop: 5, fontSize: 30 }]}>
        Up to 50% off
      </Text>
      <Text style={[styles.offersText, { marginTop: 10 }]}>
        in store and online
      </Text>
      <Text style={[styles.offersText, { marginTop: 40 }]}>
        offer valid on selected items while stock lasts.
      </Text>
      <TouchableOpacity style={styles.plusIcon} onPress={onPress}>
        {toggleOffers ? (
          <AntDesign name="minus" size={30} color="white" />
        ) : (
          <AntDesign name="plus" size={30} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  offersContainer: {
    backgroundColor: colors.darkRed,
    height: 200,
    position: "relative", // Ensure relative positioning for absolute children
  },
  offersText: {
    alignSelf: "center",
    color: "white",
  },
  plusIcon: {
    position: "absolute",
    top: "50%",
    right: 0, // Adjust as needed
    transform: [{ translateY: -12 }], // Center the icon vertically
  },
});
