import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

import { Colors } from "../config/Colors";
import { Image, ListItem, Text } from "../components";

const MyAccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.accountInfo, { marginTop: 20 }]}>
        <View style={styles.accountInfoContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../images/mosh.jpg")}
              resizeMode={"cover"}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.accountHeading} numberOfLines={1}>
              Mosh hamidani
            </Text>
            <Text style={styles.accountSubheading} numberOfLines={1}>
              Programmingwithmosha@gmail.com
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[styles.accountInfo, { marginTop: 30, paddingVertical: 12 }]}
      >
        <ListItem
          title="My Listings"
          icon={"format-list-bulleted"}
          backgroundColor={Colors.tomato}
        />
      </View>
      <View style={[styles.accountInfo, { marginTop: 2, paddingVertical: 12 }]}>
        <ListItem
          title="My Messages"
          icon={"email"}
          backgroundColor={Colors.peas}
        />
      </View>
      <View
        style={[styles.accountInfo, { marginTop: 20, paddingVertical: 12 }]}
      >
        <ListItem title="Log out" icon={"logout"} backgroundColor={"#ffe66d"} />
      </View>
    </SafeAreaView>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accountInfo: {
    paddingVertical: 20,
    backgroundColor: Colors.white,
  },
  accountInfoContainer: {
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  accountHeading: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.black,
    marginBottom: 4,
    textAlign: "center",
  },
  accountSubheading: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.gray,
    textAlign: "center",
  },
});
