import {StyleSheet} from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Text from "./Text";
import View from './View';
import {Colors} from "../config/Colors";

type ListItemType = {
    icon: any;
    backgroundColor: string;
    title: string;
};

const ListItem: React.FC<ListItemType> = ({icon, backgroundColor, title}) => {
    return (
        <View style={styles.listContainer}>
            <View style={[styles.iconContainer, {backgroundColor}]}>
                <Icon name={icon} color={Colors.white} size={22}/>
            </View>
            <Text style={styles.listHeading}>{title}</Text>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    listContainer: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    listHeading: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "500",
    },
});
