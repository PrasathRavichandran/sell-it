import React, { useState } from "react";
import { FlatList, View } from "react-native";

import FormLayout from "../Layout/FormLayout";
import {
  Button,
  ListPicker,
  ModalPopup,
  Text,
  TextInput,
  TouchableOpacity,
} from "../components";
import { Colors } from "../config/Colors";

const ListEditScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const [pickerItem] = useState([
    { id: "1", item: "Furniture" },
    { id: "2", item: "shirt" },
  ]);

  const onClickCategory = () => {
    setShowModal(!showModal);
  };

  return (
    <FormLayout>
      <TextInput
        placeholder={"Title"}
        errorHandler={false}
        errorMessage={""}
        secureTextEntry={false}
        onChangeText={() => {}}
      />
      <TextInput
        placeholder={"Price"}
        errorHandler={false}
        errorMessage={""}
        secureTextEntry={false}
        onChangeText={() => {}}
      />
      <ListPicker
        placeholder={"Category"}
        needSufixIcon
        sufixIcon={"chevron-down"}
        onPress={onClickCategory}
      />
      <TextInput
        placeholder={"Description"}
        errorHandler={false}
        errorMessage={""}
        secureTextEntry={false}
        onChangeText={() => {}}
        multiline
      />
      <Button
        backgroundColor={Colors.tomato}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        Post
      </Button>
      <ModalPopup visibility={showModal}>
        <View>
          <FlatList
            data={pickerItem}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={{ margin: 20 }}>{item.item}</Text>
            )}
          />
          <TouchableOpacity style={{ margin: 20 }} onPress={onClickCategory}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </ModalPopup>
    </FormLayout>
  );
};

export default ListEditScreen;
