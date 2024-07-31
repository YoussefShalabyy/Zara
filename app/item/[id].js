import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Route } from "expo-router/build/Route";
import { FontAwesome6 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import ImageSlider from "../../components/ImageSlider";
import { router } from "expo-router";
import Delivery from "../../components/single/Delivery";
import MenuItem from "../../components/menu/Women";
import InfoItem from "../../components/single/InfoItem";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Single = () => {
  const item = Route.params.item;
  console.log(item);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
        <ImageSlider item={item} />
        <View
          style={{ padding: 20, marginTop: 10, backgroundColor: "#F6F6F6" }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ gap: 11 }}>
              <Text style={{ fontFamily: "Medium", fontSize: 15 }}>
                {item.title}
              </Text>
              <Text style={{ fontFamily: "Medium", fontSize: 13 }}>
                {item.color}
              </Text>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", marginBottom: 35 }}
              >
                EGP {item.price}.00
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                borderWidth: 0.5,
                borderColor:"#C0C0C0"
              }}
            >
              <EvilIcons name="share-apple" size={34} color="#404040" />
            </TouchableOpacity>
          </View>

          <Delivery />
        </View>
        <View style={{ padding: 20, backgroundColor: "#F5F5DC" }}>
          <Text
            style={{
              padding: 20,
              fontFamily: "Medium",
              fontSize: 16,
              backgroundColor: "#fff",
            }}
          >
            {item.desc}
          </Text>
        </View>
        <InfoItem text={"Product Details"} />
        <InfoItem text={"No Reviews"} secondText={"Write a Review"} />
        <InfoItem text={"Delivery Information"} />
        <InfoItem text={"Returns and Refunds"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Single;

const styles = StyleSheet.create({});
