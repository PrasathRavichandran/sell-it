import React, { useState } from "react";
import * as Yup from "yup";

import SafeAreaLayout from "../Layout/SafeAreaLayout";
import {
  AppForm,
  ListPicker,
  SubmitButton,
  TextInput,
  View,
} from "../components";
import { AppImagePicker } from "../components";
import { ListItem } from "../components/ListPicker";

import UploadScreen from "./UploadScreen";

import useLocation from "../hooks/useLocation";
import { addListings } from "../api/Listings";
import { ProductProps } from "./ProductStack/FeedScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  price: Yup.string()
    .matches(/^\d+\.?\d*$/, "Must be a number")
    .required()
    .label("Price"),
  imageItem: Yup.array().required().min(1, "Please select atleast one image."),
});

const ListEditScreen = () => {
  const { location } = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [listItem, setListItem] = useState<ListItem>();

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

  const onSubmit = async (values: ProductProps | any, { resetForm }: any) => {
    setProgress(0);
    setUploadVisible(true);
    const response = await addListings(
      {
        ...values,
        location,
        categoryId: values.category.id,
        images: values.imageItem,
      },
      (progress: any) => setProgress(progress)
    );

    if (!response.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
    setListItem(null);
  };

  return (
    <SafeAreaLayout containerStyle={{ margin: 0 }}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: "",
          description: "",
          imageItem: [],
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <AppImagePicker />
          <TextInput
            placeholder={"Title"}
            customInputContainerStyle={{ width: "100%" }}
            secureTextEntry={false}
            name={"title"}
            keyboardType={"default"}
          />
          <TextInput
            placeholder={"Price"}
            customInputContainerStyle={{ width: "36%" }}
            secureTextEntry={false}
            name={"price"}
            keyboardType={"number-pad"}
          />
        </View>

        <ListPicker
          items={pickerItem}
          name={"category"}
          listItem={listItem}
          setListItem={setListItem}
        />

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
