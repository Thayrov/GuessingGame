import {Alert, Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import { Card, NumberContainer } from "../../components";
import React, {useState} from "react";

import { colors } from "../../constants";
import {styles} from './styles'

export const GameScreen = () => {
        
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Game Started</Text>
        </View>
    );
}

export default GameScreen