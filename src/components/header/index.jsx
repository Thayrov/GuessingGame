import {Text, View} from "react-native";

import React from "react";
import {styles} from './styles'

const Header = (props) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerContent}>
                {props.title}
            </Text>
        </View>
    );
}

export default Header