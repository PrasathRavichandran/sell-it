import {SafeAreaView, StyleProp, StyleSheet, ViewStyle} from "react-native";
import React from "react";

import {Colors} from "../config/Colors";
import View from '../components/View';

type formLayoutProps = {
    containerStyle?: StyleProp<ViewStyle>
}

const SafeAreaLayout: React.FC<formLayoutProps> = ({children, containerStyle}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.innerContainer, containerStyle]}>{children}</View>
        </SafeAreaView>
    );
};

export default SafeAreaLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innerContainer: {
        margin: 15,
    },
});
