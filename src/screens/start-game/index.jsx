import {Alert, Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React, {useState} from "react";

import { Card } from "../../components";
import { colors } from "../../constants";
import {styles} from './styles'

export const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    
    const OnHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g,''))
    }
    const onHandlerReset = () => {
        setEnteredValue('')
        setConfirmed(false)
    } 
    const onHandlerConfirm = (enteredValue) => {
        const chosenNumber = parseInt(enteredValue,10);
        (isNaN(chosenNumber) || chosenNumber<=0 ||chosenNumber>99) ? 
        Alert.alert('Wrong Number','Please use numbers between 1 and 99',[{text:'Got it', style: 'destructive', onPress:onHandlerReset}]) :
        setConfirmed(true) && setSelectedNumber(chosenNumber) &&  setEnteredValue('')
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
                maxLength={2}
                />
            <View style={styles.buttonContainer}>
                <Button title="Restart" onPress={onHandlerReset} color={colors.WarningColor}/>
                <Button title="Confirm" onPress={onHandlerConfirm} color={colors.SecondaryColor}/>
            </View>
            </Card>
        </View>
    </TouchableWithoutFeedback>
    );
}

export default StartGame