import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { data } from "../constants/consts"; // Correct import to use named export

const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = 350; // Fixed height for all images

const Indicator = ({ active }) => (
  <View
    style={{
      height: 10,
      width: 10,
      backgroundColor: active ? "black" : "white",
      borderRadius: 5,
      marginHorizontal: 5,
      borderWidth: 1,
    }}
  />
);

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [Text1, setText1] = useState(data[0]?.text1 || "");
  const [Text2, setText2] = useState(data[0]?.text2 || "");

  useEffect(() => {
    // Initialize Text1 and Text2 with the text of the first item
    const initialItem = data[0] || {};
    setText1(initialItem.text1 || "");
    setText2(initialItem.text2 || "");
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ width }}>
      <Image
        source={item.uri }
        style={{ width: width, height: IMAGE_HEIGHT }}
      />
    </View>
  );

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const currentIndex = Math.floor(
      event.nativeEvent.contentOffset.x / slideSize
    );

    // Ensure currentIndex is within bounds
    if (currentIndex >= 0 && currentIndex < data.length) {
      setActiveSlide(currentIndex);

      // Update Text1 and Text2 based on the current item
      const currentItem = data[currentIndex];
      setText1(currentItem.text1 || "");
      setText2(currentItem.text2 || "");
    }
  };

  const renderIndicators = () => (
    <View style={{ flexDirection: "row", marginTop: 17 }}>
      {data.map((_, index) => (
        <Indicator key={index} active={index === activeSlide} />
      ))}
    </View>
  );

  return (
    <View
      style={{
        backgroundColor: "#D3D3D3",
        height: 450,
        marginTop: 10,
        position: "relative", // Ensure positioning context for children
        alignItems: "center",
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      <View
        style={{
          position: "absolute",
          bottom: 20,
          backgroundColor: "#fff",
          alignItems: "center",
          width: 320,
          height: 100,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 10,
            fontSize: 20,
          }}
        >
          {Text1}
        </Text>
        <Text style={{ fontWeight: "600" }}>{Text2}</Text>
        {renderIndicators()}
      </View>
    </View>
  );
}
