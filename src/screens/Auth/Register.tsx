import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import useForm from "../../lib/components/useForm";
import validate from "../../lib/validations/registerForm";

import { fetchRegisterRequest } from "../../modules/auth/actions";
import strings from "../../config/strings";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";

const RegisterScreen = ({ register }: { register: () => void }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
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
        name="fullname"
        value={values.fullname}
        error={errors.fullname}
        onChangeText={handleChange}
        placeholder={strings.NAME_PLACEHOLDER}
      />
      <FormInput
        name="password"
        value={values.password}
        error={values.password}
        onChangeText={handleChange}
        placeholder={strings.PASSWORD_PLACEHOLDER}
      />
      <Button onPress={handleSubmit}>
        <Text>{strings.REGISTER}</Text>
      </Button>
    </View>
  );
};

const mapStateToProps = (response: any) => {
  return response.authReducer;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    register: (email: string, password: string, fullname: string) => {
      dispatch(fetchRegisterRequest({ email, password, fullname }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);
