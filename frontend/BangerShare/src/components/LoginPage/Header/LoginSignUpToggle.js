import React, {useState, Component } from "react";

import styles from "../style";
import {Text, View} from 'react-native';
import { Button, Container } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const LoginSignUpToggle = (props) => {

    const {handleSignupToggle} = props;

    const [disableLogin, setDisableLogin] = useState(true);

    const toggleDisableLogin= () => {
        setDisableLogin(!disableLogin)
    }


    return (
        <Container>
            <Grid>
                <Col>   
                    <Button style={styles.loginButton} onPress={() => {handleSignupToggle(); toggleDisableLogin();} } disabled={disableLogin}>
                        <Text style ={styles.loginButtonText}>Login</Text>
                    </Button>
                </Col>
                <Col>   
                    <Button style={styles.loginButton} onPress={() => {handleSignupToggle(); toggleDisableLogin();}} disabled={!disableLogin}>
                        <Text style ={styles.loginButtonText}>SignUp</Text>
                    </Button>
                </Col>
            </Grid>
        </Container>
    );
  }

  


export default LoginSignUpToggle;