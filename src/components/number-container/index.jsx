import {Text, View} from "react-native";

import React from "react";
import {styles} from './styles'

const NumberContainer = ({number}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    );
}

export default NumberContainer