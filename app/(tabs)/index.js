import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Search from "../../components/Search";
import colors from "../../constants/colors";
import OffersContainer from "../../components/offersContainer";
import OffersToggeled from "../../components/offersToggeled";
import Slider from "../../components/Slider";

import { useCustomFonts } from "../../constants/fonts";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import ShopByCategory from "../../components/ShopByCategory";
import Trending from "../../components/Trending";
import Recommended from "../../components/Recommended";

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [toggleOffers, setToggleOffers] = useState(false);
  const loaded = useCustomFonts();
  if (!loaded) {
    return null;
  }

  async function getCloths() {
    const querySnapshot = await getDocs(collection(db, "cloth"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  const [trending, setTrending] = useState([]);
  const getTrending = async () => {
    const q = query(collection(db, "cloth"), where("isTrending", "==", true));
    const fetchedTrending = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const clothData = doc.data();
      clothData.docId = doc.id;
      fetchedTrending.push(clothData);
    });
    setTrending(fetchedTrending);
  };

  return (
    <View style={styles.outerContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Zara</Text>
        <Search value={searchKey} onChangeText={setSearchKey} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <OffersContainer
            onPress={() => setToggleOffers(!toggleOffers)}
            toggleOffers={toggleOffers}
          />
          <OffersToggeled toggleOffers={toggleOffers} />
          <Slider />
          <ShopByCategory />
          <Trending />
          <Recommended />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    alignSelf: "center",
    fontFamily: "b",
  },

});
