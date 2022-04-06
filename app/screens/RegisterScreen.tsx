import React from "react";

import { Colors } from "../config/Colors";
import { Button, TextInput } from "../components";
import FormLayout from "../Layout/FormLayout";

const RegisterScreen = () => {
  return (
    <FormLayout>
      <TextInput
        needIcon
        icon={"account"}
        placeholder={"Name"}
        errorHandler={false}
        errorMessage={""}
        secureTextEntry={false}
        onChangeText={() => {}}
      />
      <TextInput
        needIcon
        icon={"email"}
        placeholder={"Email"}
        errorHandler={false}
        errorMessage={""}
        secureTextEntry={false}
        onChangeText={() => {}}
      />
      <TextInput
        needIcon
        icon={"lock"}
        placeholder={"Password"}
        errorHandler={false}
        errorMessage={""}
        secureTextEntry={false}
        onChangeText={() => {}}
      />
      <Button
        backgroundColor={Colors.tomato}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      >
        Register
      </Button>
    </FormLayout>
  );
};

export default RegisterScreen;
