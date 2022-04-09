import React from "react";
import {StyleSheet} from 'react-native';
import {FormikValues} from 'formik';
import * as Yup from 'yup';

import SafeAreaLayout from "../Layout/SafeAreaLayout";
import {AppForm, Image, SubmitButton, TextInput} from "../components";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).max(20).label('Password')
});

const LoginScreen = () => {
    const onSubmit = (values: FormikValues) => {
        console.log('login screen ', values);
    }

    return (
        <SafeAreaLayout containerStyle={styles.container}>
            <Image
                source={require("../images/logo-red.png")}
                style={styles.logoImage}
            />
            <AppForm initialValues={{email: '', password: ''}} onSubmit={onSubmit} validationSchema={validationSchema}>
                <TextInput
                    needIcon
                    icon={"email"}
                    placeholder={"Email"}
                    secureTextEntry={false}
                    name={'email'}
                    keyboardType={'email-address'}
                />
                <TextInput
                    needIcon
                    icon={"lock"}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    name={'password'}
                    keyboardType={'default'}
                />
                <SubmitButton title={'Login'}/>
            </AppForm>
        </SafeAreaLayout>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    logoImage: {
        width: 90,
        height: 90,
        resizeMode: "contain",
        marginBottom: 30
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    }
})