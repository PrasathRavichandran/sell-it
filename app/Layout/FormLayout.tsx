import {SafeAreaView, StyleProp, StyleSheet, View, ViewStyle} from "react-native";
import React from "react";

import { Colors } from "../config/Colors";

type formLayoutProps = {
  containerStyle?: StyleProp<ViewStyle>
}

const FormLayout: React.FC<formLayoutProps> = ({ children,containerStyle }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.innerContainer,containerStyle]}>{children}</View>
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
