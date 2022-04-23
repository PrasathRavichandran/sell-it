import { ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import { Colors } from "../config/Colors";
import { Text, View } from "./index";

type buttonProps = {
  title: string;
  subtitle: number;
  image: ImageSourcePropType | any;
  thumbnailUrl: any;
};

const Card: React.FC<buttonProps> = ({
  title,
  subtitle,
  image,
  thumbnailUrl,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          uri={image}
          style={styles.cardImage}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
      </View>
      <View style={styles.cardContentContainer}>
        <Text style={styles.cardHeading}>{title}</Text>
        <Text style={styles.cardSubheading}>{"$" + subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    width: "100%",
    borderRadius: 20,
    marginBottom: 20,
  },
  cardImageContainer: {
    width: "100%",
    height: 250,
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardContentContainer: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.black,
    marginBottom: 10,
  },
  cardSubheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.peas,
  },
});
