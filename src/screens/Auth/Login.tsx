import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import useForm from "../../lib/hooks/useForm";
import validate from "../../lib/validations/loginForm";

import { fetchLoginRequest } from "../../modules/auth/actions";
import strings from "../../config/strings";

import Button from "../../elements/Button/Button";
import FormInput from "../../elements/FormInput/FormInput";
import Container from "../../elements/Container/Container";

const LoginScreen = ({
  login,
  navigation,
  isAuthenticated
}: {
  login: () => void;
  navigation: any;
  isAuthenticated: boolean;
}) => {
  if (isAuthenticated) {
    return navigation.navigate("Profile");
  }
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  return (
    <Container padding="3%">
      <FormInput
        name="email"
        value={values.email}
        error={errors.email}
        onChangeText={handleChange}
        placeholder={strings.EMAIL_PLACEHOLDER}
        keyboardType="email-address"
      />
      <FormInput
        name="password"
        value={values.password}
        error={errors.password}
        onChangeText={handleChange}
        placeholder={strings.PASSWORD_PLACEHOLDER}
        keyboardType="default"
      />
      <Button onPress={handleSubmit}>
        <Text>{strings.LOGIN}</Text>
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text>Dont have an account? Join here !</Text>
      </Button>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  const { isAuthenticated } = props.screenProps || false;
  return {
    login: (data: { email: string; password: string }) =>
      dispatch(fetchLoginRequest(data)),
    navigation: props.navigation,
    isAuthenticated
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);
