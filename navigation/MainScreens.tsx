import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
  } from "@react-navigation/native";
  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import * as React from "react";
  import { ColorSchemeName } from "react-native";
  import AuthScreen from "../screens/AuthScreen/AuthScreen";
  import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewsDetails from "../screens/NewsDetails/NewsDetails";
  import {
    RootStackParamList
  } from "../types";
  
  export default function MainScreens({
    colorScheme,
  }: {
    colorScheme: ColorSchemeName;
  }) {
    return (
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    );
  }
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  function RootNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          animation: "slide_from_right",
          presentation: "transparentModal",
        }}
      >
     
   
     <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{  title: "News"}}
        />
        <Stack.Screen
          name="Details"
          component={NewsDetails}
          options={{  title: "News Details"}}
        />
     
        {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group> */}
      </Stack.Navigator>
    );
  }
  