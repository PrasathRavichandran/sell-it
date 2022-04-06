import React from "react";
import { StyleSheet } from "react-native";

import { Colors } from "../config/Colors";
import Text from "./Text";
import TouchableOpacity from "./TouchableOpacity";

type buttonProps = {
  backgroundColor: string;
  onPress: () => void;
};

const Button: React.FC<buttonProps> = ({
  children,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: "bold",
    color: Colors.white,
  },
});
