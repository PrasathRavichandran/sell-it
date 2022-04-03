import { ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";

import { Colors } from "../config/Colors";
import { Text, Image } from "./index";

type buttonProps = {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

const Card: React.FC<buttonProps> = ({ title, subtitle, image }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image source={image} resizeMode={"cover"} style={styles.cardImage} />
      </View>
      <View style={styles.cardContentContainer}>
        <Text style={styles.cardHeading}>{title}</Text>
        <Text style={styles.cardSubheading}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    width: "100%",
    height: 340,
    borderRadius: 20,
  },
  cardImageContainer: {
    width: "100%",
    height: 250,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContentContainer: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.black,
    marginBottom: 10,
  },
  cardSubheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.peas,
  },
});
