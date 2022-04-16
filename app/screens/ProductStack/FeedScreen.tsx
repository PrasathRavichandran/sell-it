import { FlatList, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

import Card from "../../components/Card";
import { TouchableOpacity, View } from "../../components";
import { Colors } from "../../config/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { FeedStackParamsList } from "../../navigators/types";

type Props = StackScreenProps<FeedStackParamsList, "FeedScreen">;

const FeedScreen: React.FC<Props> = ({ navigation }) => {
  const [products] = useState([
    {
      id: "1",
      title: "Couch For sales",
      subtitle: "$300",
      imageUri:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "2",
      title: "Furnitures in great condition",
      subtitle: "$250",
      imageUri:
        "https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 50 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetailsScreen")}
          >
            <Card
              title={item.title}
              subtitle={item.subtitle}
              image={item.imageUri}
            />
          </TouchableOpacity>
        )}
      />
    </View>
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
});
