import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import { Colors } from "../config/Colors";

const InternetStatus = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>No Internet connection.</Text>
      </View>
    );
  return null;
};

export default InternetStatus;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 50,
    width: "100%",
    backgroundColor: Colors.tomato,
    zIndex: 1,
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    color: Colors.white,
  },
});
