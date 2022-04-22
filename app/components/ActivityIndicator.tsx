import React from "react";
import LottieView from "lottie-react-native";

type ActivityIndicatorProps = {
  visible: boolean;
};

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  visible = false,
}) => {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../images/animation/loader.json")}
      loop
      autoPlay={true}
    />
  );
};

export default ActivityIndicator;
