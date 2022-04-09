import {StyleSheet} from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import {Colors} from "../config/Colors";
import Text from "./Text";
import View from './View';
import TouchableOpacity from "./TouchableOpacity";

type ListPickerProps = {
    needIcon?: boolean;
    icon?: any;
    needSufixIcon?: boolean;
    sufixIcon?: any;
    placeholder: string;
    onPress: () => void;
};

const ListPicker: React.FC<ListPickerProps> = (
    {
        needIcon = false,
        icon = "",
        needSufixIcon = false,
        sufixIcon = "",
        placeholder,
        onPress,
    }
) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
                {needIcon && <Icon name={icon} size={24} color={Colors.medium}/>}
                <Text style={styles.textInput}>{placeholder}</Text>
                {needSufixIcon && (
                    <Icon name={sufixIcon} size={24} color={Colors.medium}/>
                )}
            </View>
        </TouchableOpacity>
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
    },
    textInput: {
        color: Colors.medium,
        fontSize: 16,
        fontWeight: "500",
        marginHorizontal: 10,
        flex: 1,
    },
});
