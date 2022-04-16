import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { FeedStackParamsList } from "./types";

import { FeedScreen, ProductDetailsScreen } from "../screens/ProductStack";

const Stack = createStackNavigator<FeedStackParamsList>();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen name={"FeedScreen"} component={FeedScreen} />
      <Stack.Screen
        name={"ProductDetailsScreen"}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
