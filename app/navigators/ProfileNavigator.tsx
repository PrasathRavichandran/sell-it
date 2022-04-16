import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileStackParamsList } from "./types";

import { ProfileScreen } from "../screens/ProfileStack";

const Stack = createStackNavigator<ProfileStackParamsList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"MyAccountScreen"}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
