import { View, Text } from "react-native";
import React from "react";
import OfferCategory from "./offerCategory";

export default function OffersToggeled(props) {
  return (
    <View>
      {props.toggleOffers && (
        <View>
          <OfferCategory text="Women" />
          <OfferCategory text="Men" />
          <OfferCategory text="Kids" />
          <OfferCategory text="H&M Home" />
        </View>
      )}
    </View>
  );
}
