import { StatusBar } from "expo-status-bar";

import InitScreen from "./app/screens/InitScreen";
import ViewProductScreen from "./app/screens/ViewProductScreen";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <InitScreen />
      {/* <ViewProductScreen /> */}

    </>
  );
}
