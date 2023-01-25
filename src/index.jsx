import {ActivityIndicator, View} from 'react-native';
import {GameScreen, StartGame} from './screens/index';
import React, {useState} from "react";

import {Header} from './components';
import {StatusBar} from 'expo-status-bar';
import { colors } from "./constants";
import {styles} from './styles';
import {useFonts} from 'expo-font';

const App = () => {
const[loaded] = useFonts({
	'Silkscreen-Regular': require('../assets/fonts/Silkscreen-Regular.ttf'),
	'Silkscreen-Bold': require('../assets/fonts/Silkscreen-Bold.ttf'),
	
});
const[userNumber,SetUserNumber]=useState(null)

const onHandlerStartGame =(selectedNumber)=>{
	SetUserNumber(selectedNumber)};
	
const Content =() => 
	userNumber ? (
	<GameScreen daNumber={userNumber}/> 
	) : (
	<StartGame onHandlerStartGame={onHandlerStartGame}/>
	);
	
	if(!loaded) {
		return (
		<View style={styles.containerLoader}>
			<ActivityIndicator size='large' color={colors.SecondaryColor}/>
		</View>
		)
	}
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header title='Guessing Game'/>
			<Content/>

		</View>
	);
};

export default App;
