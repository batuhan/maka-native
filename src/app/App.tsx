import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, StatusBar } from "react-native";

import { fetchAuthRequest } from "../modules/auth/actions";

import AppNavigator from "../navigation/AppNavigator";
import Spinner from "../elements/Spinner/Spinner";

interface Props {
  auth: { isAuthenticated: boolean; loading: boolean };
}

function App({ auth }: Props) {
  const {
    isAuthenticated,
    loading
  }: { isAuthenticated: boolean; loading: boolean } = auth;

  return (
    (loading && <Spinner />) || (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <AppNavigator screenProps={{ isAuthenticated }} />
      </View>
    )
  );
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.authReducer
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    isAuthenticated: dispatch(fetchAuthRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
