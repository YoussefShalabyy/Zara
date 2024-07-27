import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import OffersContainer from "../offersContainer";
import MenuItem from "./Women";

const { width } = Dimensions.get("window");

const MenSection = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <OffersContainer screen={"Men"} />
      <Pressable style={{ marginVertical: 10 }}>
        <ImageBackground
          source={require("../../assets/menuMen/ManModel.jpg")}
          style={{
            width: width,
            height: 380,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{ color: "#fff", fontSize: 22, fontFamily: "ExtraBold" }}
          >
            NEW ARRIVALS: Subtle serenity
          </Text>
          <Text
            style={{
              color: "#fff",
              marginBottom: 15,
              marginTop: 10,
              fontFamily: "SemiBold",
            }}
          >
            Flowy silhouettes in calm hues
          </Text>
        </ImageBackground>
      </Pressable>
      <MenuItem
        source={require("../../assets/menuWomen/New.png")}
        text="New Arrivals"
      />

      <MenuItem
        source={require("../../assets/menuWomen/percentage.png")}
        text="Offers and highlights"
      />
      <MenuItem
        // source={require("../../assets/menuMen/New.png")}
        text="Lookbook"
      />
      <MenuItem
        source={require("../../assets/menuMen/TrendingNow.jpg")}
        text="Trending Now"
      />
      <MenuItem
        source={require("../../assets/menuMen/ShopByProduct.jpg")}
        text="Shop By Product"
      />
      <ImageBackground
        source={require("../../assets/menuMen/Model.jpg")}
        style={{
          width: width,
          height: 400,
          alignItems: "center",
          justifyContent: "flex-end",
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
          ٍShirts for sunny days
        </Text>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 15,
            marginTop: 10,
          }}
        >
          ٍShirts for sunny days
        </Text>
      </ImageBackground>
      <ImageBackground
        source={require("../../assets/menuMen/JeansModel.jpg")}
        style={{
          width: width,
          height: 400,
          alignItems: "center",
          justifyContent: "flex-end",
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
          The refined denim route
        </Text>
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 15,
            marginTop: 10,
          }}
        >
         noted icons and classic cuts in seasonal washes.
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default MenSection;
