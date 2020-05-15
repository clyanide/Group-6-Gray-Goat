import React, { Component } from "react";

import styles from "../style";
import { View, TextInput } from "react-native";

export default class SignupField extends Component {
  render() {
    return (
      <View style={styles.loginScreenContainer}>
        <TextInput
          placeholder="Email"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
        />
        <TextInput
          placeholder="Name"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
        />
        <TextInput
          placeholder="Password"
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          secureTextEntry={true}
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
}
