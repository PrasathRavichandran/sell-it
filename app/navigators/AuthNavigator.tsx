import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { AuthStackParamsList } from "./types";
import {
  LoginScreen,
  RegisterScreen,
  WelcomeScreen,
} from "../screens/AuthStack";
import { Colors } from "../config/Colors";

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
        headerStyle: {
          backgroundColor: Colors.tomato,
        },
        headerTintColor: Colors.white,
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Icon name="close" color={Colors.white} size={26} />
        ),
      }}
    >
      <Stack.Screen
        name={"WelcomeScreen"}
        options={{
          headerShown: false,
        }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={"LoginScreen"}
        options={{
          headerTitle: "Log In",
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name={"RegisterScreen"}
        options={{
          headerTitle: "Sign up",
        }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
