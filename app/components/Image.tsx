import { Image, ImageProps } from "react-native";
import React from "react";

const CustomImage: React.FC<ImageProps> = ({ source, style, ...props }) => {
  return <Image source={source} style={style} {...props} />;
};

export default CustomImage;
