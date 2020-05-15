import React, { Component } from "react";

import styles from "../style";
import { Text, View } from "react-native";
import { Button } from "native-base";

const LoginButton = () => {
  const onLoginPress = () => { }

  return (
    <View style={styles.loginScreenContainer}>
      <Button style={styles.loginButton} onPress={() => this.onLoginPress()}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Button>
    </View>
  );
}

export default LoginButton;


