import React from "react";
import {FormikValues} from "formik";
import * as Yup from "yup";

import {AppForm, SubmitButton, TextInput} from "../components";
import SafeAreaLayout from "../Layout/SafeAreaLayout";

const validationSchema = Yup.object().shape({
    username:Yup.string().required().label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).max(20).label('Password')
});

const RegisterScreen = () => {
    const onSubmit = (values: FormikValues) => {
        console.log('login screen ', values);
    }
    return (
        <SafeAreaLayout>
            <AppForm initialValues={{username: '', email: '', password: ''}} onSubmit={onSubmit} validationSchema={validationSchema}>
                <TextInput
                    needIcon
                    icon={"account"}
                    placeholder={"Username"}
                    secureTextEntry={false}
                    name={'username'}
                    keyboardType={'default'}
                />
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
                <SubmitButton title={'Register'}/>
            </AppForm>
        </SafeAreaLayout>
    );
};

export default RegisterScreen;
