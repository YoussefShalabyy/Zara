import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Delivery = () => {
  return (
    <View style={{ marginTop: 10, padding: 20, backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <FontAwesome6 name="hand-holding-heart" size={20} color="black" />
        <View>
          <Text style={{ fontWeight: "400", fontSize: 13, marginBottom: 3 }}>
            Standard Delivery
          </Text>
          <Text
            style={{
              color: "#D32F2F",
              fontSize: 10,
              fontWeight: "500",
              marginBottom: 10,
            }}
          >
            Your order will be delivered within 1-5 days
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 13, marginBottom: 3 }}>
            Same Day Delivery
          </Text>
          <Text
            style={{
              color: "#D32F2F",
              fontSize: 10,
              fontWeight: "500",
              marginBottom: 5,
            }}
          >
            Order Before 10AM and recieve same-day delivery
          </Text>
          <TouchableOpacity onPress={() => router.push("item/deliveryInfo")}>
            <Text
              style={{
                fontWeight: "bold",
                textDecorationLine: "underline",
                marginTop: 10,
                fontSize: 12,
              }}
            >
              Deliver To Egypt
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          gap: 20,
        }}
      >
        <SimpleLineIcons name="handbag" size={20} color="black" />
        <View>
          <Text style={{ fontWeight: "400", fontSize: 13, marginBottom: 7 }}>
            Free Click & Collect at a store of your choice
          </Text>
          <Text
            style={{
              textDecorationLine: "underline",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            Find collection store
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginTop: 30 }}>
        <SimpleLineIcons name="check" size={20} color="black" />
        <View>
          <Text style={{ fontWeight: "400", fontSize: 13, marginBottom: 7 }}>
            FREE returns available now online
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Learn more
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Delivery;
