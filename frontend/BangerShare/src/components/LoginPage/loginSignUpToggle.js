import React, { Component } from "react";

import styles from "./style";
import {Text, View} from 'react-native';
import { Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class LoginSignUpToggle extends Component {
  render() {
    return (
        <View style={styles.loginScreenContainer}>
            <Grid>
                <Col>   
                    <Button style={styles.loginButton} onPress={() => this.onLoginPress()}>
                        <Text style ={styles.loginButtonText}>Login</Text>
                    </Button>
                </Col>
                <Col>   
                    <Button style={styles.loginButton} onPress={() => this.onLoginPress()}>
                        <Text style ={styles.loginButtonText}>SignUp</Text>
                    </Button>
                </Col>
            </Grid>
        </View>
    );
  }

  onLoginPress() {

  }

}