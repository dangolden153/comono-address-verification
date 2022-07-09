import React from "react";
import { StyleProp, TextStyle } from "react-native";

export interface textProps {
    children: React.ReactNode ;
    textStyles?: StyleProp<TextStyle> 
}