import { View } from "react-native";
import React from "react";
import OfferCategory from "./offerCategory";
import { router } from "expo-router";

export default function OffersToggeled(props) {
  const navigateToPage = (page) => {
    router.navigate({
      pathname: "search",
      params: { page },
    });
  };

  return (
    <View>
      {props.toggleOffers && (
        <View>
          <OfferCategory onPress={() => navigateToPage("Women")} text="Women" />
          <OfferCategory onPress={() => navigateToPage("Men")} text="Men" />
          <OfferCategory onPress={() => navigateToPage("Kids")} text="Kids" />
          <OfferCategory
            onPress={() => navigateToPage("Home")}
            text="H&M Home"
          />
        </View>
      )}
    </View>
  );
}
