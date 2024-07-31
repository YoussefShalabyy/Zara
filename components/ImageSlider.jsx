import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";

const { width } = Dimensions.get("window");

const ImageSlider = ({ item }) => {
  const [active, setActive] = useState(0);

  const indicator = () => {
    return item.images.map((_, index) => {
      const isActive = index === active;
      return (
        <View
          key={index}
          style={[
            styles.indicator,
            isActive ? styles.activeIndicator : styles.inactiveIndicator,
          ]}
        />
      );
    });
  };

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={item.images}
        keyExtractor={(image, index) => index.toString()}
        renderItem={({ item }) => (
          <ImageBackground
            source={{ uri: item }}
            style={{ width: width, height: 580 }}
          />
        )}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const currentIndex = Math.floor(contentOffsetX / width);
          currentIndex >= 0 && setActive(currentIndex);
        }}
      />
      <View style={styles.indicatorContainer}>{indicator()}</View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  indicatorContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeIndicator: {
    backgroundColor: "#505050",
  },
  inactiveIndicator: {
    borderWidth: 1,
    borderColor: "#505050",
  },
});
