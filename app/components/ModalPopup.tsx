import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Colors } from "../config/Colors";

export const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 30;

type BottomSheetProps = {
  children: any;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
};

const ModalPopup = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ children }, ref) => {
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });

    const scrollTo = useCallback((destination: number) => {
      "worklet";
      translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo]);

    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 1.1) {
          scrollTo(0);
        }
      });

    const rBottomSheetContainer = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolation.CLAMP
      );
      return {
        transform: [{ translateY: translateY.value }],
        borderRadius,
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[styles.bottomSheetContainer, rBottomSheetContainer]}
        >
          {children}
        </Animated.View>
      </GestureDetector>
    );
  }
);

export default ModalPopup;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    position: "absolute",
    width: "100%",
    height: SCREEN_HEIGHT,
    top: SCREEN_HEIGHT,
    backgroundColor: Colors.white,
    borderRadius: 20,
    zIndex: 1,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
});
