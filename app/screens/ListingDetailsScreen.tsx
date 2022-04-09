import React from "react";
import {StyleSheet} from "react-native";

import {Colors} from "../config/Colors";
import {Text, Image, View} from "../components";
import ViewLayout from "../Layout/ViewLayout";

const ListingDetailsScreen = () => {
    return (
        <ViewLayout>
            <Image
                source={require("../images/jacket.jpg")}
                resizeMode={"cover"}
                style={styles.viewImage}
            />
            <View style={styles.listContentContainer}>
                <Text style={styles.listHeading}>Red Jacket for sale!</Text>
                <Text style={styles.listSubheading}>$300</Text>
            </View>

            <View style={styles.listItemContainer}>
                <Image
                    source={require("../images/mosh.jpg")}
                    resizeMode={"cover"}
                    style={styles.listImage}
                />
                <View style={styles.listItemContentContainer}>
                    <Text style={styles.listItemHeading}>Mosh hamidani</Text>
                    <Text style={styles.listItemSubheading}>5 Listings</Text>
                </View>
            </View>
        </ViewLayout>
    );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    viewImage: {
        width: "100%",
        height: 360,
    },
    listContentContainer: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    listHeading: {
        fontSize: 20,
        fontWeight: "500",
        color: Colors.black,
        marginBottom: 10,
    },
    listSubheading: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.peas,
    },
    listItemContainer: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    listImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    listItemContentContainer: {
        marginLeft: 10,
    },
    listItemHeading: {
        fontSize: 18,
        fontWeight: "500",
        color: Colors.black,
        marginBottom: 5,
    },
    listItemSubheading: {
        fontSize: 16,
        fontWeight: "400",
        color: Colors.gray,
    },
});
