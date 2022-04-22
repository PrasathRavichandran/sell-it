import { Modal, StyleSheet } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import { View } from "../components";
import { Colors } from "../config/Colors";

const UploadScreen = ({ progress = 0, visible = false, onDone }: any) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} color={Colors.tomato} width={200} />
        ) : (
          <LottieView
            source={require("../images/animation/done.json")}
            autoPlay
            loop={false}
            style={styles.animation}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});
