import React from 'react';
import { Text, Container, Button } from "native-base";

const Color = (props) => {
    const { getNewColor, color } = props
    if (color) {
        return (<Container>
            <Text>{color}</Text>
            <Button onPress={() => getNewColor()} />
        </Container>)
    }

  return null;
};

export default Color