import React, {useState} from "react";
import {FlatList} from "react-native";
import {FormikValues} from "formik";

import SafeAreaLayout from "../Layout/SafeAreaLayout";
import {
    AppForm,
    ListPicker,
    ModalPopup, SubmitButton,
    Text,
    TextInput,
    TouchableOpacity,
} from "../components";

const ListEditScreen = () => {
    const [showModal, setShowModal] = useState(false);

    const [pickerItem] = useState([
        {id: "1", item: "Furniture"},
        {id: "2", item: "shirt"},
    ]);

    const onClickCategory = () => {
        setShowModal(!showModal);
    };

    const onSubmit = (values: FormikValues) => {
        console.log('login screen ', values);
    }

    return (
        <SafeAreaLayout>
            <AppForm initialValues={{}} onSubmit={onSubmit} validationSchema={{}}>
                <TextInput
                    placeholder={"Title"}
                    secureTextEntry={false}
                    name={'title'}
                    keyboardType={'default'}
                />
                <TextInput
                    placeholder={"Price"}
                    secureTextEntry={false}
                    name={'price'}
                    keyboardType={'number-pad'}
                />
                <ListPicker
                    placeholder={"Category"}
                    needSufixIcon
                    sufixIcon={"chevron-down"}
                    onPress={onClickCategory}
                />
                <TextInput
                    placeholder={"Description"}
                    secureTextEntry={false}
                    name={'description'}
                    multiline
                    keyboardType={'default'}
                />
                <SubmitButton title={'Post'}/>
            </AppForm>
            <ModalPopup visibility={showModal}>
                <>
                    <FlatList
                        data={pickerItem}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <Text style={{margin: 20}}>{item.item}</Text>
                        )}
                    />
                    <TouchableOpacity style={{margin: 20}} onPress={onClickCategory}>
                        <Text>close</Text>
                    </TouchableOpacity>
                </>
            </ModalPopup>
        </SafeAreaLayout>
    );
};

export default ListEditScreen;
