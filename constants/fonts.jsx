import { useFonts } from "expo-font";

export function useCustomFonts() {
  const [loaded] = useFonts({
    a: require("../assets/fonts/PlaywriteBEVLG-Thin.ttf"),
    b: require("../assets/fonts/OPTIBodoni-Antiqua.otf"),
    SemiBold: require("../assets/fonts/OpenSans-SemiBold.ttf"),
    Medium: require("../assets/fonts/OpenSans-Medium.ttf"),
    Light: require("../assets/fonts/OpenSans-Light.ttf"),
    Bold: require("../assets/fonts/OpenSans_SemiCondensed-Bold.ttf"),
    ExtraBold: require("../assets/fonts/OpenSans_SemiCondensed-ExtraBold.ttf"),
  });
  return loaded;
}
