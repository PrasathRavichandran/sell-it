import React from "react";
import { FormikValues } from "formik";
import * as Yup from "yup";

import { AppForm, SubmitButton, Text, TextInput } from "../../components";
import SafeAreaLayout from "../../Layout/SafeAreaLayout";
import { StyleSheet } from "react-native";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(20).label("Password"),
});

const RegisterScreen = () => {
  const onSubmit = (values: FormikValues) => {
    console.log("login screen ", values);
  };
  return (
    <SafeAreaLayout>
      <Text style={styles.heading}>Sign up to sell you things!</Text>
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <TextInput
          needIcon
          icon={"account"}
          placeholder={"Username"}
          secureTextEntry={false}
          name={"username"}
          keyboardType={"default"}
        />
        <TextInput
          needIcon
          icon={"email"}
          placeholder={"Email"}
          secureTextEntry={false}
          name={"email"}
          keyboardType={"email-address"}
        />
        <TextInput
          needIcon
          icon={"lock"}
          placeholder={"Password"}
          secureTextEntry={true}
          name={"password"}
          keyboardType={"default"}
        />
        <SubmitButton title={"Register"} />
      </AppForm>
    </SafeAreaLayout>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 14,
    fontWeight: "500",
  },
});
