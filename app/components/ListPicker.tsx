import { FlatList, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { useFormikContext } from "formik";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Colors } from "../config/Colors";

import Text from "./Text";
import View from "./View";
import TouchableOpacity from "./TouchableOpacity";
import ModalPopup, { BottomSheetRefProps, SCREEN_HEIGHT } from "./ModalPopup";

export type ListItem = {
  id: string;
  title: string;
  icon: any;
  color: string;
};

type ListPickerProps = {
  items: ListItem[];
  name: string;
  listItem: ListItem;
  setListItem: any;
};

type FormikValues = {
  [key: string]: any;
};

const ListPicker: React.FC<ListPickerProps> = ({
  items,
  name,
  listItem,
  setListItem,
}) => {
  const { setFieldValue, touched, errors } = useFormikContext<FormikValues>();

  const ref = useRef<BottomSheetRefProps>(null);

  const onClickCategory = () => {
    ref.current?.scrollTo(-SCREEN_HEIGHT / 1.1);
  };

  const onCloseCategory = () => {
    ref.current?.scrollTo(0);
  };

  return (
    <>
      <TouchableOpacity onPress={onClickCategory} style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInput}>
            {listItem ? listItem.title : "Category"}
          </Text>
          <Icon name={"chevron-down"} size={24} color={Colors.medium} />
        </View>
        {touched[name] && errors[name] ? (
          <Text style={styles.helpText}>{errors[name]}</Text>
        ) : null}
      </TouchableOpacity>

      <ModalPopup ref={ref}>
        <Text style={styles.modalHeading}>Select a Category</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={{ alignItems: "center" }}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setListItem(item);
                setFieldValue(name, item);
                onCloseCategory();
              }}
              style={styles.pickerContainer}
            >
              <View
                style={[
                  styles.pickerContainerItem,
                  { backgroundColor: item.color },
                ]}
              >
                <Icon name={item.icon} color={Colors.white} size={36} />
              </View>
              <Text style={styles.pickerLabel}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </ModalPopup>
    </>
  );
};

export default ListPicker;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: Colors.cream,
    padding: 14,
    width: "100%",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
    marginHorizontal: 15,
    width: "50%",
  },
  textInput: {
    color: Colors.medium,
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 10,
    flex: 1,
  },
  helpText: {
    marginLeft: 10,
    color: Colors.tomato,
    marginTop: 6,
  },
  modalHeading: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  pickerContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  pickerContainerItem: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  pickerLabel: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
  },
});
