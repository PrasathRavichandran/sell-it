import React, { useState } from "react";
import { FormikValues } from "formik";
import * as Yup from "yup";

import SafeAreaLayout from "../Layout/SafeAreaLayout";
import {
  AppForm,
  ListPicker,
  SubmitButton,
  TextInput,
  View,
} from "../components";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  category: Yup.string().required().label("Category"),
  description: Yup.string().label("Description"),
  price: Yup.string()
    .matches(/^\d+\.?\d*$/, "Must be a number")
    .required()
    .label("Price"),
});

const ListEditScreen = () => {
  const [pickerItem] = useState([
    { id: "1", title: "Furniture", icon: "table-furniture", color: "#1abc9c" },
    { id: "2", title: "Cars", icon: "car", color: "#f1c40f" },
    { id: "3", title: "Cameras", icon: "camera", color: "#27ae60" },
    { id: "4", title: "Games", icon: "cards", color: "#d35400" },
    { id: "5", title: "Clothing", icon: "shoe-heel", color: "#2980b9" },
    { id: "6", title: "Sports", icon: "basketball", color: "#c0392b" },
    { id: "7", title: "Music", icon: "headphones", color: "#8e44ad" },
    { id: "8", title: "Books", icon: "book", color: "#e84393" },
    { id: "9", title: "Others", icon: "rectangle-outline", color: "#2c3e50" },
  ]);

  const onSubmit = (values: FormikValues) => {
    console.log("screen ", values);
  };

  return (
    <SafeAreaLayout containerStyle={{ margin: 0 }}>
      <AppForm
        initialValues={{ title: "", price: "", category: "", description: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <View style={{ marginHorizontal: 15 }}>
          <TextInput
            placeholder={"Title"}
            secureTextEntry={false}
            name={"title"}
            keyboardType={"default"}
          />
          <TextInput
            placeholder={"Price"}
            secureTextEntry={false}
            name={"price"}
            keyboardType={"number-pad"}
          />
        </View>
        <ListPicker items={pickerItem} name={"category"} />
        <View style={{ marginHorizontal: 15 }}>
          <TextInput
            placeholder={"Description"}
            secureTextEntry={false}
            name={"description"}
            multiline
            keyboardType={"default"}
          />
          <SubmitButton title={"Post"} />
        </View>
      </AppForm>
    </SafeAreaLayout>
  );
};

export default ListEditScreen;
