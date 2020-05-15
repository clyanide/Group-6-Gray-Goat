import React, { Component } from "react";

import styles from "../style";
import { Text, View } from "react-native";
import { Button } from "native-base";

const SignupButton = () => {
  return (
    <View style={styles.loginScreenContainer}>
      <Button style={styles.loginButton} onPress={() => this.onSignupPress()}>
        <Text style={styles.loginButtonText}>Signup</Text>
      </Button>
    </View>
  );

  const onSignupPress = () => { }
}

export default SignupButton;