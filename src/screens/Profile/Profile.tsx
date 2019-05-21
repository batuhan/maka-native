import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import Button from "../../components/Button/Button";

import { logout } from "../../modules/auth/actions";

interface Props {
  navigation: any;
  logOut: () => void;
}

function Profile({ navigation, logOut }: Props) {
  const { isAuthenticated } = navigation.getScreenProps();
  return (
    <View>
      <Text>Profile</Text>
      {(isAuthenticated && (
        <Button
          onPress={() => {
            logOut();
          }}
        >
          <Text>Logout</Text>
        </Button>
      )) || (
        <Button
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text>Please Login</Text>
        </Button>
      )}
    </View>
  );
}

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    logOut: () => {
      dispatch(logout());
    },
    navigation: props.navigation
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Profile);
