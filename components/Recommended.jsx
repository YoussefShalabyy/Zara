import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import ListDisplayer from "./ListDisplayer";

export default function Recommended() {
  const [recommended, setRecommended] = useState([]);

  const getRecommended = async () => {
    const q = query(
      collection(db, "cloth"),
      where("isRecommended", "==", true)
    );
    const fetchedRecommended = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const clothData = doc.data();
      clothData.docId = doc.id;
      fetchedRecommended.push(clothData);
    });
    setRecommended(fetchedRecommended);
  };
  useEffect(() => {
    getRecommended();
  }, []);
  return (
    <View>
      <Text
        style={{
          marginLeft: 15,
          fontSize: 15,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Recommended For You
      </Text>
      <ListDisplayer data={recommended} />
    </View>
  );
}
