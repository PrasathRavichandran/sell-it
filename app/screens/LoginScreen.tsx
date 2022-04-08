import React from "react";
import {StyleSheet} from 'react-native';
import {Formik, FormikValues} from 'formik';
import * as Yup from 'yup';

import FormLayout from "../Layout/FormLayout";
import {Button, Image, TextInput} from "../components";
import {Colors} from "../config/Colors";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).max(20).label('Password')
});

const LoginScreen = () => {
    const onSubmit = (values: FormikValues) => {
        console.log('login screen ', values);
    }

    return (
        <FormLayout containerStyle={styles.container}>
            <Image
                source={require("../images/logo-red.png")}
                style={styles.logoImage}
            />
            <Formik initialValues={{
                email: '',
                password: ''
            }} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({
                      handleChange,
                      values,
                      handleSubmit, setFieldValue,
                      setFieldTouched,
                      touched,
                      errors
                  }) => (
                    <>
                        <TextInput
                            needIcon
                            icon={"email"}
                            placeholder={"Email"}
                            errorHandler={touched.email || false}
                            errorMessage={errors.email || ''}
                            secureTextEntry={false}
                            onChange={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                            value={values.email}
                            keyboardType={'email-address'}
                        />
                        <TextInput
                            needIcon
                            icon={"lock"}
                            placeholder={"Password"}
                            errorHandler={touched.password || false}
                            errorMessage={errors.password || ""}
                            onChange={() => setFieldTouched('password')}
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            value={values.password}
                            keyboardType={'default'}
                        />
                        <Button
                            backgroundColor={Colors.tomato}
                            onPress={handleSubmit}
                        >
                            Login
                        </Button>
                    </>
                )}
            </Formik>
        </FormLayout>
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