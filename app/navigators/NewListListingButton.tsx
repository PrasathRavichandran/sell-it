import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from "../config/Colors";
import { TouchableOpacity } from "../components";

type Props = {
  onPress: () => void;
};

const NewListListingButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={Colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewListListingButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tomato,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    borderWidth: 10,
    borderColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
