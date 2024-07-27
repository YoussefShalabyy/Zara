import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { categories2 } from "../constants/consts";

const Menu = ({ selected, setSelected }) => {
  return (
    <View
      style={{
        paddingLeft: 10,
        backgroundColor: "#fff",
        borderBottomWidth: 0.4,
        borderBottomColor: "#808080",
      }}
    >
      <FlatList
        horizontal
        bounces={false}
        data={categories2}
        renderItem={({ item }) => (
          <View style={{ marginLeft: 10 }}>
            <Pressable
              onPress={() => {
                setSelected(item.name);
              }}
              style={{ paddingVertical: 15 }}
            >
              <Text
                style={{
                  fontFamily: "c",
                  color: item.name === selected ? "#D32F2F" : "#505050",
                }}
              >
                {item.name}
              </Text>
            </Pressable>
            {item.name === selected && (
              <View
                style={{ borderBottomWidth: 2, borderBottomColor: "#D32F2F" }}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
