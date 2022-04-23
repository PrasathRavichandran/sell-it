import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const isExpireTime = 5;

type itemTypeProps = {
  value: string;
  timestamp: number;
};

const store = async (key: string, value: string): Promise<void> => {
  try {
    const item: itemTypeProps = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpire = (item: itemTypeProps) => {
  const now = moment(Date.now());
  const storedTime = moment(item?.timestamp);
  return now.diff(storedTime, "minutes") > isExpireTime;
};

const get = async (key: string): Promise<void | null> => {
  try {
    const value = (await AsyncStorage.getItem(prefix + key)) as string;
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpire(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item?.value;
  } catch (error) {
    console.log(error);
  }
};

export default { store, get };
