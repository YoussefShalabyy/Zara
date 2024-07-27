import {
  Text,
  Pressable,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const Poster = () => {
  return (
    <Pressable
      style={{
        marginVertical: 10,
      }}
    >
      <ImageBackground
        source={require("../../assets/menuWomen/model_in_a_car.jpg")}
        style={{
          width: width,
          height: 400,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontFamily: "c",
          }}
        >
          NEW ARRIVALS
        </Text>
        <Text
          style={{
            color: "#fff",
            marginBottom: 20,
            marginTop: 5,
            fontFamily: "c",
          }}
        >
          The fine pieces every wardrobe needs.
        </Text>
      </ImageBackground>
    </Pressable>
  );
};

export default Poster;
