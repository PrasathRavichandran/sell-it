import { StatusBar } from "expo-status-bar";
import Card from "./app/components/Card";

import InitScreen from "./app/screens/InitScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewProductScreen from "./app/screens/ViewProductScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <InitScreen /> */}
      <ViewProductScreen />
      {/* <ListingDetailsScreen /> */}
    </>
  );
}
