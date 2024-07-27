import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Route } from "expo-router/build/Route";
import { router, Stack } from "expo-router";
const { width } = Dimensions.get("window");
import { SimpleLineIcons } from "@expo/vector-icons";
import Favourite from "../../components/Favourite";
import Back from "../../components/Back";

const Single = () => {
  const item = Route.params.item;
  console.log(item);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "",
          headerRight: () => <Favourite />,
          headerLeft: () => <Back />,
        }}
      />
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={item.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: width, height: 620 }} />
        )}
      />
    </SafeAreaView>
  );
};

export default Single;

const styles = StyleSheet.create({});
