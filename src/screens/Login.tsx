import React from "react";
import { View, Text, Alert } from "react-native";

import strings from "../config/strings";

import Button from "../components/Button/Button";
import FormInput from "../components/FormInput/FormInput";

interface State {
  email: string;
  password: string;
}

class LoginScreen extends React.Component<{}, State> {
  readonly state: State = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({
      email
    });
  };

  handlePasswordChange = (password: string) => {
    this.setState({
      password
    });
  };

  handleLoginPress = () => {
    console.log("press login");
  };

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <FormInput
          value={email}
          onChangeText={this.handleEmailChange}
          placeholder={strings.EMAIL_PLACEHOLDER}
        />
        <FormInput
          value={password}
          onChangeText={this.handlePasswordChange}
          placeholder={strings.PASSWORD_PLACEHOLDER}
        />
        <Button onPress={this.handleLoginPress}>
          <Text>{strings.LOGIN}</Text>
        </Button>
      </View>
    );
  }
}

export default LoginScreen;
