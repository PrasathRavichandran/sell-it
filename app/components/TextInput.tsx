import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Colors } from "../config/Colors";
import Text from "./Text";

type TextInputProps = {
  needIcon?: boolean;
  icon?: any;
  multiline?: boolean;
  needSufixIcon?: boolean;
  sufixIcon?: any;
  placeholder: string;
  errorHandler: boolean;
  errorMessage: string;
  secureTextEntry: boolean;
  onChangeText: (arg: string) => void;
};

const CustomTextInput: React.FC<TextInputProps> = ({
  needIcon = false,
  icon = "",
  needSufixIcon = false,
  sufixIcon = "",
  placeholder,
  errorHandler,
  errorMessage,
  secureTextEntry,
  onChangeText,
  multiline = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInputContainer}>
        {needIcon && <Icon name={icon} size={24} color={Colors.medium} />}
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          multiline={multiline}
        />
        {needSufixIcon && (
          <Icon name={sufixIcon} size={24} color={Colors.medium} />
        )}
      </View>
      {errorHandler && <Text style={styles.helpText}>{errorMessage}</Text>}
    </View>
  );
};

export default CustomTextInput;

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
