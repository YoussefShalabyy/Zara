import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import Search from "../../components/Search";
import Categories from "../../components/Categories";

export default function Home() {
  const [key, setKey] = useState("");
  
  return (
    <SafeAreaView>
      <Search onChangetext={setKey} value={key} />
      <Categories/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search: {
    alignItems: "center",
    width: "90%",
    marginLeft: "5%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    padding: "3%",
    gap: "7%",
    borderWidth: 1,
  },
});
