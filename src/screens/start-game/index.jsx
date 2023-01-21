import {Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React, {useState} from "react";

import { Card } from "../../components";
import { colors } from "../../constants";
import {styles} from './styles'

export const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const OnHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g,''))
    }
    return(
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.container}>
            <Text style={styles.title} >Start Game</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label} >Write a number</Text>
                <TextInput 
                value={enteredValue}
                keyboardType="numeric" 
                style={styles.input} 
                placeholder='#'
                placeholderTextColor={colors.TextColor}
                onChangeText={OnHandlerChange}
                />
            <View style={styles.buttonContainer}>
                <Button title="Restart" onPress={()=>null} color={colors.WarningColor}/>
                <Button title="Confirm" onPress={()=>null} color={colors.SecondaryColor}/>
            </View>
            </Card>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default StartGame