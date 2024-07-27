import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Route } from "expo-router/build/Route";

const Piece = ({ item }) => {
  return (
    <Pressable
      onPress={() => {
        router.push("item/" + item.id);
        // Route.arguments = {
        //   item: item,
        // };
        Route.params = {
          item: item,
        };
      }}
      style={{
        width: 150,
        marginLeft: 10,
        maxHeight: 300,
        marginBottom: 50,
      }}
    >
      <Image source={{ uri: item.images[0] }} style={{ height: 230 }} />
      <Text style={{ fontSize: 12, marginTop: 2 }}>{item.title}</Text>
      <Text style={{ fontSize: 14, marginTop: 2, fontWeight: "700" }}>
        EGP {item.price}.00
      </Text>
    </Pressable>
  );
};

export default Piece;

const styles = StyleSheet.create({});
