import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { textProps } from "./Type";

const SmallText: FunctionComponent<textProps> = (props) => {
  return (
    <Text style={[styles.regularText, props.textStyles]}>{props.children}</Text>
  );
};

export default SmallText;

const styles = StyleSheet.create({
  regularText: {
    fontSize: 13,
  },
});
