import { View, Text, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recommended}
        renderItem={({ item }) => (
          <View
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
          </View>
        )}
      />
    </View>
  );
}
