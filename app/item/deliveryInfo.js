import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const DeliveryInfo = () => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontFamily: "Bold",
            marginTop: 25,
            marginLeft: 20,
            marginBottom: 10,
            fontSize: 22,
          }}
        >
          Choose Delivery Location
        </Text>
        <Text
          style={{
            marginLeft: 20,
            fontFamily: "Medium",
            fontSize: 13,
            color: "#505050",
          }}
        >
          Delivery options and delivery speeds may vary for different locations
        </Text>
      </View>
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          marginTop: 10,
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ fontFamily: "Medium", color: "#505050" }}>
          Add address
        </Text>
        <SimpleLineIcons name="arrow-right" size={20} color="#505050" />
      </Pressable>
      <Text
        style={{
          fontFamily: "Bold",
          marginTop: 25,
          marginLeft: 20,
          marginBottom: 20,
          fontSize: 22,
        }}
      >
        Delivery Information
      </Text>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderColor: "#ccc",
          borderBottomWidth: 0,
        }}
      >
        <Text style={{ fontFamily: "Medium", fontSize: 15, marginBottom: 2 }}>
          Standard Delivery
        </Text>
        <Text style={{ fontFamily: "Medium", color: "#505050", fontSize: 13 }}>
          Your order will be delivered within 1-5 days
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ fontFamily: "Medium", fontSize: 15, marginBottom: 2 }}>
          Same Day Delivery
        </Text>
        <Text style={{ fontFamily: "Medium", color: "#505050", fontSize: 13 }}>
          Order before 10AM and receive same-day delivery
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          marginTop: 10,
        }}
      >
        <Text style={{ fontFamily: "Bold", fontSize: 20 }}>
          Click and Collect
        </Text>
        <Text style={{ fontFamily: "Bold", textDecorationLine: "underline" }}>
          Find collection store
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
          borderWidth: 0.5,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ fontFamily: "Medium", color: "#505050", fontSize: 13 }}>
          Collect your order from a nearby store
        </Text>
      </View>
    </View>
  );
};

export default DeliveryInfo;

const styles = StyleSheet.create({});
