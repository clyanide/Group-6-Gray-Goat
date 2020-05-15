import React, { Component } from "react";
import { Text, Container } from "native-base";
import styles from "../style.js";

export default class LogoDisplay extends Component {
  render() {
    return (
      <Container>
        <Text style={styles.logoText}> BangerShare</Text>
      </Container>
    );
  }
}

/**
 * Old code, different way of doing it
 */

// const LogoDisplay = () => (
//   <Container>
//     <Text style={styles.logoText} > BangerShare</Text>
//   </Container>
// );

//export default LogoDisplay;
