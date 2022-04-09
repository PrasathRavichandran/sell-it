import {Modal, StyleSheet} from "react-native";
import React from "react";

import View from "./View";

type ModalProps = {
    visibility: boolean;
};

const ModalPopup: React.FC<ModalProps> = ({children, visibility}) => {
    return (
        <View style={styles.container}>
            <Modal animationType={"slide"} transparent={true} visible={visibility}>
                <View style={styles.innerContainer}>
                    {children}
                </View>
            </Modal>
        </View>
    );
};

export default ModalPopup;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
});
