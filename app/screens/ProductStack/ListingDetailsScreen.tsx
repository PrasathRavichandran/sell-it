import React from "react";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Image } from "react-native-expo-image-cache";

import { Colors } from "../../config/Colors";
import { Text, View, Image as AppImage } from "../../components";
import { FeedStackParamsList } from "../../navigators/types";

import ViewLayout from "../../Layout/ViewLayout";

type Props = StackScreenProps<FeedStackParamsList, "ProductDetailsScreen">;

const ListingDetailsScreen: React.FC<Props> = ({ route }) => {
  return (
    <ViewLayout>
      <Image
        uri={route.params?.product.images[0].url as string}
        preview={{
          uri: route?.params?.product?.images[0]?.thumbnailUrl as string,
        }}
        tint={"light"}
        style={styles.viewImage}
      />
      <View style={styles.listContentContainer}>
        <Text style={styles.listHeading}>{route.params?.product.title}</Text>
        <Text style={styles.listSubheading}>
          ${route.params?.product.price}
        </Text>
      </View>

      <View style={styles.listItemContainer}>
        <AppImage
          source={require("../../images/mosh.jpg")}
          resizeMode={"cover"}
          style={styles.listImage}
        />
        <View style={styles.listItemContentContainer}>
          <Text style={styles.listItemHeading}>Mosh hamidani</Text>
          <Text style={styles.listItemSubheading}>5 Listings</Text>
        </View>
      </View>
    </ViewLayout>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  viewImage: {
    width: "100%",
    height: 360,
    resizeMode: "cover",
  },
  listContentContainer: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  listHeading: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.black,
    marginBottom: 10,
  },
  listSubheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.peas,
  },
  listItemContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  listImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  listItemContentContainer: {
    marginLeft: 10,
  },
  listItemHeading: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.black,
    marginBottom: 5,
  },
  listItemSubheading: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.gray,
  },
});
