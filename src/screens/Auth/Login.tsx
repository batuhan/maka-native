import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import useForm from "../../lib/components/useForm";
import validate from "../../lib/validations/loginForm";

import { fetchLoginRequest } from "../../modules/auth/actions";
import strings from "../../config/strings";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import Container from "../../components/Container/Container";

const LoginScreen = ({
  login,
  navigation
}: {
  login: () => void;
  navigation: any;
}) => {
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

const mapStateToProps = (response: any) => {
  return response.authReducer;
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    login: (data: { email: string; password: string }) => {
      dispatch(fetchLoginRequest(data));
    },
    navigation: props.navigation
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
