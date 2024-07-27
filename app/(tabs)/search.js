import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useCustomFonts } from "../../constants/fonts";
import Search from "../../components/Search";
import Menu from "../../components/Menu";
import WomenSection from "../../components/menu/WomenSection";
import MenSection from "../../components/menu/MenSection";
import BabySection from "../../components/menu/BabySection";
import KidsSection from "../../components/menu/KidsSection";
import HomeSection from "../../components/menu/HomeSection";
import SportSection from "../../components/menu/SportSection";
import SaleSection from "../../components/menu/SaleSection";
import { useLocalSearchParams } from "expo-router";

const { width } = Dimensions.get("window");

const SearchScreen = () => {
  const [selected, setSelected] = useState("Women");
  const { page } = useLocalSearchParams();

  useEffect(() => {
    const validCategories = ["Women", "Men", "Baby", "Kids", "Home", "Sport", "Sale"];
    if (page && validCategories.includes(page)) {
      setSelected(page);
    } else {
      setSelected("Women"); // Default to "Women" if page is not valid
    }
  }, [page]);

  const loaded = useCustomFonts();
  if (!loaded) {
    return null;
  }

  const renderSection = () => {
    switch (selected) {
      case "Women":
        return <WomenSection />;
      case "Men":
        return <MenSection />;
      case "Baby":
        return <BabySection />;
      case "Kids":
        return <KidsSection />;
      case "Home":
        return <HomeSection />;
      case "Sport":
        return <SportSection />;
      case "Sale":
        return <SaleSection />;
      default:
        return <WomenSection />; // Fallback to WomenSection if something goes wrong
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.headerText}>Search</Text>
      <Search screen={"menu"} />
      <Menu selected={selected} setSelected={setSelected} />
      {renderSection()}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "c",
    textAlign: "center",
    fontSize: 25,
  },
});
