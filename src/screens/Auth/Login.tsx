import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import useForm from "../../lib/components/useForm";
import validate from "../../lib/validations/loginForm";

import { fetchLoginRequest } from "../../modules/auth/actions";
import strings from "../../config/strings";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";

const LoginScreen = ({ login }: { login: () => void }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

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
        error={values.password}
        onChangeText={handleChange}
        placeholder={strings.PASSWORD_PLACEHOLDER}
      />
      <Button onPress={handleSubmit}>
        <Text>{strings.LOGIN}</Text>
      </Button>
    </View>
  );
};

const mapStateToProps = (response: any) => {
  return response.authReducer;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    login: (email: string, password: string) => {
      dispatch(fetchLoginRequest({ email, password }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
