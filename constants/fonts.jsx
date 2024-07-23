import { useFonts } from "expo-font";

export function useCustomFonts() {
  const [loaded] = useFonts({
    a: require("../assets/fonts/PlaywriteBEVLG-Thin.ttf"),
    b: require("../assets/fonts/OPTIBodoni-Antiqua.otf"),
  });
  return loaded;
}
