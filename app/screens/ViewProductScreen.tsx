import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../config/Colors";

const ViewProductScreen = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.viewProductContainer}>
        <View style={styles.iconView}>
          <TouchableOpacity style={styles.iconContainer}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconContainer, { backgroundColor: Colors.peas }]}
          ></TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/chair.jpg")}
            style={{ width: "100%", height: "100%" }}
            resizeMode={"contain"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewProductScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  viewProductContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  iconView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.tomato,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
