import { DefaultTheme } from "@react-navigation/native";
import { Colors } from "../config/Colors";

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.tomato,
    background: "transparent",
  },
};

export default defaultTheme;
