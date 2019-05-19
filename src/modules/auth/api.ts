const baseUrl = "blabla";
import AsyncStorage from "@react-native-community/async-storage";

import { getInAppConfigs } from "../../lib/functions/configs";

const login = (email: string, password: string) => {
  //call api
  const profile = {
    email
  };
  const idToken = "token";
  setAuth(idToken);
  return {
    profile,
    idToken
  };
};

const register = (email: string, password: string, fullname: string) => {
  //call api
  const profile = {
    email,
    fullname
  };
  const idToken = "token";
  setAuth(idToken);
  return {
    profile,
    idToken
  };
};

const getAuthStatus = async () => {
  const authStorage = await AsyncStorage.getItem(
    getInAppConfigs("AUTH_STORAGE_NAME")
  );
  return !!authStorage;
};

const logout = async () => {
  await AsyncStorage.removeItem(getInAppConfigs("AUTH_STORAGE_NAME"));
};

const setAuth = async (token: string) => {
  await AsyncStorage.setItem(getInAppConfigs("AUTH_STORAGE_NAME"), token);
};

export { login, register, getAuthStatus, logout };
