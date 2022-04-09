import {FlatList, StyleSheet} from "react-native";
import React, {useState} from "react";
import {useFormikContext} from "formik";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import {Colors} from "../config/Colors";

import Text from "./Text";
import View from './View';
import TouchableOpacity from "./TouchableOpacity";
import ModalPopup from "./ModalPopup";

type ListItem = {
    id: string,
    title: string,
    icon: any,
    color: string
}

type ListPickerProps = {
    items: ListItem[],
    name: string;
};

type FormikValues = {
    [key: string]: any;
}

const ListPicker: React.FC<ListPickerProps> = ({items, name}) => {
    const [showModal, setShowModal] = useState(false);
    const [listItem, setListItem] = useState<ListItem>();

    const {setFieldValue, touched, errors} = useFormikContext<FormikValues>();

    const onClickCategory = () => {
        setShowModal(!showModal);
    };

    return (
        <TouchableOpacity onPress={onClickCategory} style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
                <Text style={styles.textInput}>{listItem ? listItem.title : 'Category'}</Text>
                <Icon name={'chevron-down'} size={24} color={Colors.medium}/>
            </View>
            {touched[name] && errors[name] ? <Text style={styles.helpText}>{errors[name]}</Text> : null}
            <ModalPopup visibility={showModal}>
                <View style={styles.modalLayout}>
                    <Text style={styles.modalHeading}>Select a Category</Text>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        contentContainerStyle={{alignItems: 'center'}}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => {
                                setListItem(item);
                                setFieldValue(name, item.title);
                                onClickCategory();
                            }} style={styles.pickerContainer}>
                                <View style={[styles.pickerContainerItem, {backgroundColor: item.color}]}>
                                    <Icon name={item.icon} color={Colors.white} size={42}/>
                                </View>
                                <Text style={styles.pickerLabel}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ModalPopup>
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
    helpText: {
        marginLeft: 10,
        color: Colors.danger,
        marginTop: 6,
    },
    modalHeading: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 20
    },
    modalLayout: {
        backgroundColor: Colors.white,
        height: '90%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 1.25,
        shadowRadius: 10,
        elevation: 10
    },
    pickerContainer: {
        alignItems: 'center',
        marginVertical: 20
    },
    pickerContainerItem: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pickerLabel: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10
    }
});
