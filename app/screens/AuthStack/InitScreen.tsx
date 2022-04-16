import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { Colors } from "../../config/Colors";
import { Button, Image, Text, View } from "../../components";
import { AuthStackParamsList } from "../../navigators/types";

import ViewLayout from "../../Layout/ViewLayout";

type Props = StackScreenProps<AuthStackParamsList, "WelcomeScreen">;

const InitScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ViewLayout>
      <ImageBackground
        source={require("../../images/background.jpg")}
        style={styles.backgroundImage}
        blurRadius={4}
      >
        <View style={styles.logoImageContainer}>
          <Image
            source={require("../../images/logo-red.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoDescription}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={Colors.tomato}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Login
          </Button>
          <Button
            backgroundColor={Colors.peas}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Register
          </Button>
        </View>
      </ImageBackground>
    </ViewLayout>
  );
};

export default InitScreen;

const styles = StyleSheet.create({
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
