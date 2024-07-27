// import React, { useState } from "react";
// import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
// import Search from "../../components/Search";
// import OffersContainer from "../../components/offersContainer";
// import OffersToggeled from "../../components/offersToggeled";
// import Slider from "../../components/Slider";
// import { useCustomFonts } from "../../constants/fonts";
// import ShopByCategory from "../../components/ShopByCategory";
// import Trending from "../../components/Trending";
// import Recommended from "../../components/Recommended";

// export default function Home() {
//   const [searchKey, setSearchKey] = useState("");
//   const [toggleOffers, setToggleOffers] = useState(false);
//   const loaded = useCustomFonts();
//   if (!loaded) {
//     return null;
//   }
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Text style={styles.text}>Zara</Text>
//       <Search value={searchKey} onChangeText={setSearchKey} />
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <OffersContainer
//           onPress={() => setToggleOffers(!toggleOffers)}
//           toggleOffers={toggleOffers}
//         />
//         <OffersToggeled toggleOffers={toggleOffers} />
//         <Slider />
//         <ShopByCategory />
//         <Trending />
//         <Recommended />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 40,
//     alignSelf: "center",
//     fontFamily: "b",
//   },
// });
