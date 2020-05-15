import React, { Component } from "react";

import styles from "../style";
import { Text, View } from "react-native";
import { Button } from "native-base";

export default class LoginButton extends Component {
  render() {
    return (
      <View style={styles.loginScreenContainer}>
        <Button style={styles.loginButton} onPress={() => this.onLoginPress()}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Button>
      </View>
    );
  }

  onLoginPress() {}
}
