import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import useForm from "../../lib/components/useForm";
import validate from "../../lib/validations/loginForm";

import { fetchLoginRequest } from "../../modules/auth/actions";
import strings from "../../config/strings";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";

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
  console.log(errors);
  return (
    <View>
      <FormInput
        name="email"
        value={values.email}
        error={errors.email}
        onChangeText={handleChange}
        placeholder={strings.EMAIL_PLACEHOLDER}
      />
      <FormInput
        name="password"
        value={values.password}
        error={errors.password}
        onChangeText={handleChange}
        placeholder={strings.PASSWORD_PLACEHOLDER}
      />
      <Button onPress={handleSubmit}>
        <Text>{strings.LOGIN}</Text>
      </Button>
      <Button
        onPress={() => {
          navigation.push("Register");
        }}
      >
        <Text>Dont have an account? Join here !</Text>
      </Button>
    </View>
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
