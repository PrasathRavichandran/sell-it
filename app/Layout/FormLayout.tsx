import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

import { Colors } from "../config/Colors";

const FormLayout: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default FormLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    margin: 15,
  },
});
