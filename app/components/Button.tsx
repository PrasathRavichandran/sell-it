import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../config/Colors";

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
    height: 60,
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
