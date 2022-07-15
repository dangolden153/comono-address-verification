import * as React from "react";
import { View, ColorSchemeName } from "react-native";
import ContentView from "../components/ContentView";
import AuthScreens from "./AuthScreens";
import MainScreens from "./MainScreens";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const token = "null";
  return (
    <View style={{ flex: 1 }}>
      <MainScreens colorScheme={colorScheme} />
     
    </View>
  );
}
