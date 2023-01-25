import {GameScreen, StartGame} from './screens/index';
import React, {useState} from "react";

import {Header} from './components';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {styles} from './styles';

const App = () => {
const[userNumber,SetUserNumber]=useState(null)
const Content =() => userNumber ? <GameScreen/> : <StartGame/>
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header title='Guessing Game'/>
			<Content/>

		</View>
	);
};

export default App;
