import React, { Component } from "react";

import styles from "./style";
import {View, TextInput} from 'react-native';

export default class InputField extends Component {
  render() {
    return (
        <View style={styles.loginScreenContainer}>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
        </View>
    );
  }

}