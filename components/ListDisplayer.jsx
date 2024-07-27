import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Piece from "./Piece";

const ListDisplayer = ({ data }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <Piece item={item} />}
    />
  );
};

export default ListDisplayer;

const styles = StyleSheet.create({});
