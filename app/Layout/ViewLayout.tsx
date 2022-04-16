import {StyleProp, StyleSheet, ViewStyle} from "react-native";
import React from "react";

import {Colors} from "../config/Colors";
import View from '../components/View';

type viewLayoutProps = {
    containerStyle?: StyleProp<ViewStyle>
}

const ViewLayout: React.FC<viewLayoutProps> = ({children, containerStyle}) => {
    return (
        <View style={[styles.container, containerStyle]}>{children}</View>
    );
};

export default ViewLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
