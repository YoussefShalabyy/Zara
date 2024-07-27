import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import React, { useState } from "react";

import OffersContainer from "../../components/offersContainer";
import MenuItem from "../../components/menu/Women";
import Poster from "../../components/menu/Poster";

const { width } = Dimensions.get("window");

const WomenSection = () => {
  return (
    <ScrollView>
      <OffersContainer screen={"Women"} />
      <Poster />
      <MenuItem
        text="New Arraivals"
        source={require("../../assets/menuWomen/New.png")}
      />
      <MenuItem
        text="Offers and highlights"
        source={require("../../assets/menuWomen/percentage.png")}
      />
      <MenuItem
        text="Trending Now"
        source={require("../../assets/menuWomen/Model_Beige_Dress.jpg")}
      />
      <MenuItem
        text="Shop By Product"
        source={require("../../assets/menuWomen/dress.jpg")}
      />
      <MenuItem
        text="Magazine"
        source={require("../../assets/menuWomen/bag.jpg")}
      />
      <Pressable>
        <ImageBackground
          source={require("../../assets/menuWomen/TopsModel.jpg")}
          style={{
            width: width,
            height: 400,
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
            New season tops
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              marginBottom: 15,
              marginTop: 10,
            }}
          >
            Chic and delicate styles.
          </Text>
        </ImageBackground>
      </Pressable>
    </ScrollView>
  );
};

export default WomenSection;
