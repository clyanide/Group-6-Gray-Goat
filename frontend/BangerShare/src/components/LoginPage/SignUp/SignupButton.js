import React, { Component } from "react";

import styles from "../style";
import { Text, View } from "react-native";
import { Button } from "native-base";

const SignupButton = (props) => {
  const { signUpInfo, onSignupPress } = props

  return (
    <View style={styles.loginScreenContainer}>
      <Button style={styles.loginButton} onPress={() => onSignupPress(signUpInfo)}>
        <Text style={styles.loginButtonText}>Signup</Text>
      </Button>
    </View>
  );
}

export default SignupButton;