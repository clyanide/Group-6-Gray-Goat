import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../style";
import { View, TextInput } from "react-native";

const InputField = (props) => {
  const { handlePasswordChange, handleUsernameChange, userInfo } = props;

  return (
    <View style={styles.loginScreenContainer}>
      <TextInput
        placeholder="Username"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        value={userInfo.username}
        onChange={(e) => handleUsernameChange(e)}
      />
      <TextInput
        placeholder="Password"
        placeholderColor="#c4c3cb"
        style={styles.loginFormTextInput}
        secureTextEntry={true}
        value={userInfo.password}
        onChange={(e) => handlePasswordChange(e)}
      />
    </View>
  );
}

export default InputField;
