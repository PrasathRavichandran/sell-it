import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../config/Colors";
import Button from "../components/Button";

const InitScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/background.jpg")}
        style={styles.backgroundImage}
        blurRadius={4}
      >
        <View style={styles.logoImageContainer}>
          <Image
            source={require("../images/logo-red.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoDescription}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={Colors.tomato}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            Login
          </Button>
          <Button
            backgroundColor={Colors.peas}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
          >
            Register
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoImageContainer: {
    alignItems: "center",
    paddingTop: 80,
    flexGrow: 1,
  },
  logoDescription: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
    paddingTop: 14,
    textTransform: "capitalize",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.tomato,
  },
});
