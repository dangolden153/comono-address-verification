import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { textProps } from "./Type";

const RegularText: FunctionComponent<textProps> = (props) => {
  return (
    <Text style={[styles.regularText, props.textStyles]}>
      {props.children}
    </Text>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  regularText: {
    fontSize:15,
  },
});
