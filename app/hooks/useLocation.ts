import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import { useEffect, useState } from "react";

import { Locations } from "../screens/ProductStack/FeedScreen";

const useLocation = () => {
  const [location, setLocation] = useState<Locations>();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = (await Location.getLastKnownPositionAsync()) as LocationObject;

    setLocation({ latitude, longitude });
  };

  return { location };
};

export default useLocation;
