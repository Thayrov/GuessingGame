import {Button, Text, TextInput, View} from "react-native";

import { Card } from "../../components";
import React from "react";
import { colors } from "../../constants/themes/colors";
import {styles} from './styles'

export const StartGame = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title} >Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label} >Write a number</Text>
                <TextInput 
                keyboardType="numeric" 
                style={styles.input} 
                placeholder='#'
                />
            <View style={styles.buttonContainer}>
                <Button title="Restart" onPress={()=>null} color={colors.IndianRed}/>
                <Button title="Confirm" onPress={()=>null} color={colors.SteelBlue}/>
            </View>
            </Card>

        </View>
    );
}

export default StartGame