import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

const CustomTouchableOpacity: React.FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

export default CustomTouchableOpacity;
