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
  import {
    RootStackParamList
  } from "../types";
  
  export default function AuthScreens({
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
          name="Auth"
          component={AuthScreen}
          options={{ headerShown:false, animation: "fade_from_bottom"}}
        />
    
     
        {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group> */}
      </Stack.Navigator>
    );
  }
  