import { KeyboardType, StyleSheet, TextInput } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useFormikContext } from "formik";

import { Colors } from "../config/Colors";
import Text from "./Text";
import View from "./View";

type TextInputProps = {
  needIcon?: boolean;
  icon?: any;
  needSufixIcon?: boolean;
  sufixIcon?: any;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  name: string;
  customInputContainerStyle?: any;
};

type FormValue = {
  [key: string]: any;
};

const CustomTextInput: React.FC<TextInputProps> = ({
  needIcon = false,
  icon = "",
  needSufixIcon = false,
  sufixIcon = "",
  placeholder,
  secureTextEntry,
  multiline = false,
  keyboardType,
  name,
  customInputContainerStyle,
}) => {
  const { setFieldTouched, handleChange, values, touched, errors } =
    useFormikContext<FormValue>();

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.textInputContainer, customInputContainerStyle]}>
        {needIcon && <Icon name={icon} size={24} color={Colors.medium} />}
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
          onChangeText={handleChange(name)}
          onChange={() => setFieldTouched(name)}
          multiline={multiline}
          value={values[name]}
          keyboardType={keyboardType}
        />
        {needSufixIcon && (
          <Icon name={sufixIcon} size={24} color={Colors.medium} />
        )}
      </View>
      {touched[name] && errors[name] ? (
        <Text style={styles.helpText}>{errors[name]}</Text>
      ) : null}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: Colors.cream,
    padding: 14,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
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
    color: Colors.danger,
    marginTop: 6,
  },
});
