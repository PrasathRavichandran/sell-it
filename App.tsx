import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import defaultTheme from "./app/navigators/NavigationTheme";
import TabNavigator from "./app/navigators/TabNavigator";
import AuthNavigator from "./app/navigators/AuthNavigator";
import InternetStatus from "./app/components/InternetStatus";

export default function App() {
  return (
    <>
      <InternetStatus />
      <NavigationContainer theme={defaultTheme}>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}
