import { ProductProps } from "../screens/ProductStack/FeedScreen";

export type AuthStackParamsList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type FeedStackParamsList = {
  FeedScreen: undefined;
  ProductDetailsScreen: undefined | { product: ProductProps };
};

export type ProfileStackParamsList = {
  MyAccountScreen: undefined;
};

export type TabStackTypes = {
  FeedTab: undefined;
  AddProductTab: undefined;
  MyAccountTab: undefined;
};
