import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import Card from "./app/components/Card";
import {Colors} from "./app/config/Colors";

import InitScreen from "./app/screens/InitScreen";
import ListEditScreen from "./app/screens/ListEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewProductScreen from "./app/screens/ViewProductScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
    return (
        <View style={{backgroundColor: Colors.cream, flex: 1}}>
            <StatusBar style="auto" backgroundColor={Colors.cream}/>
            {/*<InitScreen />*/}
            {/*<ViewProductScreen />*/}
            {/* <ListingDetailsScreen />*/}
            {/* <MyAccountScreen />*/}
            {/* <RegisterScreen />*/}
            <ListEditScreen />
            {/*<LoginScreen/>*/}
        </View>
    );
}