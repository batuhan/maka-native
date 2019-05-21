import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import useForm from "../../lib/components/useForm";
import validate from "../../lib/validations/registerForm";
import { getInAppConfigs } from "../../lib/functions/configs";

import { fetchRegisterRequest } from "../../modules/auth/actions";

import strings from "../../config/strings";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import Container from "../../components/Container/Container";

const RegisterScreen = ({
  register,
  navigation,
  isAuthenticated
}: {
  register: () => void;
  navigation: any;
  isAuthenticated: boolean;
}) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
    validate
  );
  if (isAuthenticated) {
    return navigation.navigate("Profile");
  }
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
        name="fullname"
        value={values.fullname}
        error={errors.fullname}
        onChangeText={handleChange}
        placeholder={strings.NAME_PLACEHOLDER}
        keyboardType="default"
      />
      <FormInput
        name="password"
        value={values.password}
        error={errors.password}
        onChangeText={handleChange}
        placeholder={strings.PASSWORD_PLACEHOLDER}
        keyboardType="default"
      />
      {(getInAppConfigs("REGISTER_NUMBER_IS_REQUIRED") && (
        <FormInput
          name="mobileNumber"
          value={values.mobileNumber}
          error={errors.mobileNumber}
          onChangeText={handleChange}
          placeholder={strings.MOBILE_NUMBER_PLACEHOLDER}
          keyboardType="phone-pad"
        />
      )) ||
        null}
      <Button onPress={handleSubmit}>
        <Text>{strings.REGISTER}</Text>
      </Button>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Already have an account? Sign in!</Text>
      </Button>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  const { isAuthenticated } = props.screenProps || false;
  return {
    register: (data: { email: string; password: string; fullname: string }) => {
      const { email, password, fullname } = data;
      dispatch(fetchRegisterRequest({ email, password, fullname }));
    },
    navigation: props.navigation,
    isAuthenticated
  };
};

export default connect(mapDispatchToProps)(RegisterScreen);
