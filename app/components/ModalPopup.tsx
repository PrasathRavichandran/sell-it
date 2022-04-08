import { Modal, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";

type ModalProps = {
  visibility: boolean;
};

const ModalPopup: React.FC<ModalProps> = ({ children, visibility }) => {
  return (
    <View style={styles.container}>
      <Modal animationType={"slide"} visible={visibility}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </Modal>
    </View>
  );
};

export default ModalPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
