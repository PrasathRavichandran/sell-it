import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePickers from "expo-image-picker";

import TouchableOpacity from "./TouchableOpacity";
import Image from "./Image";
import { Colors } from "../config/Colors";

type FormValue = {
  [key: string]: any;
};

const ImagePicker = () => {
  const { setFieldValue, touched, values, errors } =
    useFormikContext<FormValue>();

  const openImagePicker = async () => {
    try {
      const result = await ImagePickers.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        setFieldValue("imageItem", [...values?.imageItem, result]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickImageForDelete = (index: number) => {
    Alert.alert("", "Do you want to delete a selected Image?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => onDeleteImage(index),
      },
    ]);
  };

  const onDeleteImage = (clickedIndex: number) => {
    const imageItemCopy = [...values.imageItem];
    setFieldValue(
      "imageItem",
      imageItemCopy?.filter((_, index) => index !== clickedIndex)
    );
  };

  return (
    <>
      <FlatList
        data={values.imageItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginBottom: touched?.imageItem && errors.imageItem ? 0 : 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onClickImageForDelete(index)}>
            <Image
              source={{ uri: item.uri }}
              style={[styles.imagePickerContainer, { marginRight: 10 }]}
            />
          </TouchableOpacity>
        )}
        ListFooterComponent={
          values.imageItem?.length < 3 ? (
            <TouchableOpacity
              style={styles.imagePickerContainer}
              onPress={openImagePicker}
            >
              <Icon size={40} name="camera" color={Colors.gray} />
            </TouchableOpacity>
          ) : null
        }
      />
      {touched?.imageItem && errors.imageItem ? (
        <Text style={styles.helpText}>{errors.imageItem}</Text>
      ) : null}
    </>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePickerContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: Colors.cream,
    justifyContent: "center",
    alignItems: "center",
  },
  helpText: {
    marginLeft: 10,
    color: Colors.danger,
    marginTop: 6,
    marginBottom: 20,
  },
});
