import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TabStackTypes } from "./types";
import FeedNavigator from "./FeedNavigator";
import ProfileNavigator from "./ProfileNavigator";

import ListEditScreen from "../screens/ListEditScreen";
import NewListListingButton from "./NewListListingButton";

const TabStack = createBottomTabNavigator<TabStackTypes>();

const TabNavigator = () => {
  return (
    <TabStack.Navigator screenOptions={{ headerShown: false }}>
      <TabStack.Screen
        name={"FeedTab"}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name={"AddProductTab"}
        component={ListEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListListingButton
              onPress={() => navigation.navigate("AddProductTab")}
            />
          ),
        })}
      />
      <TabStack.Screen
        name={"MyAccountTab"}
        component={ProfileNavigator}
        options={{
          title: "Accounts",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
