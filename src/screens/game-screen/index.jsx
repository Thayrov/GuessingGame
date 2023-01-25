import {Alert, Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import { Card, NumberContainer } from "../../components";
import React, {useState} from "react";

import { colors } from "../../constants";
import {styles} from './styles'

const RNG = (min, max, exclude)=>{
    min=Math.ceil(min)
    max=Math.floor(max)
    const randomNumber = Math.floor(Math.random()*(max-min)+min)
    if(randomNumber===exclude) {
    return RNG(min, max, exclude)}else {return randomNumber}
}
export const GameScreen = ({selectedNumber}) => {
    const [currentGuess, setCurrentGuess] = useState(RNG(1,50,selectedNumber));

    return(
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.label} >Opponent's number</Text>
                <NumberContainer  number={selectedNumber}/>
                <View style={styles.buttonContainer}>
                    <Button title="minus" onPress={()=>{}} color={colors.WarningColor}/>
                    <Button title="plus" onPress={()=>{}} color={colors.SecondaryColor}/>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen