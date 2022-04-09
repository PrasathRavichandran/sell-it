import React from "react";
import {StyleSheet} from "react-native";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

import {Colors} from "../config/Colors";
import {Image, TouchableOpacity, View} from "../components";
import SafeAreaLayout from "../Layout/SafeAreaLayout";

const ViewProductScreen = () => {
    return (
        <SafeAreaLayout containerStyle={styles.viewProductContainer}>

            <View style={styles.iconView}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icons name="close" color={Colors.white} size={36}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icons name="trash-can-outline" color={Colors.white} size={36}/>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../images/chair.jpg")}
                    style={{width: "100%", height: "100%"}}
                    resizeMode={"contain"}
                />
            </View>

        </SafeAreaLayout>
    );
};

export default ViewProductScreen;

const styles = StyleSheet.create({
    viewProductContainer: {
        flex: 1,
        backgroundColor: Colors.black,
        margin: 0
    },
    iconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
