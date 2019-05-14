import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { fetchLoginRequest } from "../../modules/auth/actions";
import strings from "../../config/strings";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import { string } from "prop-types";

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
    const { login }: any = this.props;
    const { email, password } = this.state;
    login(email, password);
  };

  render() {
    const { email, password } = this.state;
    console.log(this.props);
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
