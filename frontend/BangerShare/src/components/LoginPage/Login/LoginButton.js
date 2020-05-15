import React, { Component } from "react";

import styles from "../style";
import { Text, View } from "react-native";
import { Button } from "native-base";

const LoginButton = (props) => {
  const { userInfo, onLoginPress } = props;

  return (
    <View style={styles.loginScreenContainer}>
      <Button style={styles.loginButton} onPress={() => onLoginPress(userInfo)}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Button>
    </View>
  );
}

export default LoginButton;


