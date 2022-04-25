import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import styles from './styles';
import Box from './Box/Box';
import Row from './Tools/Row';
import Column from './Tools/Column';

/*const boxes = new Array(10).fill(null).map((value, i) => i + 1);

         <View style={styles.container}>
            /*<StatusBar hidden = {true} />
            {
                boxes.map(value => (
                    <Box key = {value}>#{value}</Box>
                ))
            }
            
        </View> */

function Comp() {
    return (
        <View style={styles.container}>
            <StatusBar hidden = {false} />
            <Row>
                <Column>
                    <Box>#1</Box>
                    <Box>#2</Box>
                </Column>

                <Column>
                    <Box>#3</Box>
                    <Box>#4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Box>#5</Box>
                    <Box>#6</Box>
                </Column>

                <Column>
                    <Box>#7</Box>
                    <Box>#8</Box>
                </Column>
            </Row>
        </View>
    );
}

export default Comp;