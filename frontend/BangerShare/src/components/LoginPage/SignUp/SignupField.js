import React, { Component } from "react";

import styles from "../style";
import { View, TextInput } from "react-native";

const SignupField = (props) => {
  const { handlePasswordChange, handleUsernameChange, handleEmailChange, signUpInfo } = props;

  return (
    <View style={styles.loginScreenContainer}>
      <TextInput
        placeholder="Email"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        value={signUpInfo.email}
        onChange={(e) => handleEmailChange(e)}
      />
      <TextInput
        placeholder="Username"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        value={signUpInfo.username}
        onChange={(e) => handleUsernameChange(e)}
      />
      <TextInput
        placeholder="Password"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
        value={signUpInfo.password}
        onChange={(e) => handlePasswordChange(e)}
      />
      <TextInput
        placeholder="Retype Password"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
      />
    </View>
  );
}

export default SignupField;