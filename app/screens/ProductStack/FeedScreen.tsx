import { FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";

import { Colors } from "../../config/Colors";

import Card from "../../components/Card";
import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from "../../components";
import { ListItem } from "../../components/ListPicker";
import { FeedStackParamsList } from "../../navigators/types";
import SafeAreaLayout from "../../Layout/SafeAreaLayout";

import { getListings } from "../../api/Listings";
import useApi from "../../hooks/useApi";

type Props = StackScreenProps<FeedStackParamsList, "FeedScreen">;

type ImageProps = {
  url: string;
  thumbnailUrl: string;
};

export type Locations = {
  latitude: number;
  longitude: number;
};

export type ProductProps = {
  id: string;
  title: string;
  images: ImageProps[];
  price: number;
  categoryId: ListItem;
  userId: number;
  location: Locations;
  description: string;
};

const FeedScreen: React.FC<Props> = ({ navigation }) => {
  const {
    data: products,
    loading,
    error,
    request: loadListings,
  } = useApi(getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <SafeAreaLayout containerStyle={styles.container}>
      {error && (
        <View>
          <Text style={styles.errorMessageText}>
            Could't retrive listings right now!
          </Text>
          <Button backgroundColor={Colors.tomato} onPress={loadListings}>
            Retry
          </Button>
        </View>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", { product: item })
            }
          >
            <Card
              title={item.title}
              subtitle={item.price}
              image={item.images[0]?.url}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaLayout>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    paddingHorizontal: 15,
    backgroundColor: Colors.cream,
    flex: 1,
  },
  errorMessageText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    textAlign: "center",
  },
});
