import React from "react";

import FormLayout from "../Layout/FormLayout";
import { Button, TextInput } from "../components";
import { Colors } from "../config/Colors";

const ListEditScreen = () => {
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
      <TextInput
        placeholder={"Category"}
        errorHandler={false}
        errorMessage={""}
        secureTextEntry={false}
        onChangeText={() => {}}
        needSufixIcon
        sufixIcon={"chevron-down"}
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
    </FormLayout>
  );
};

export default ListEditScreen;
