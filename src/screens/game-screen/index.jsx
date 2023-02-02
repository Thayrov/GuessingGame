import {Alert, Button, Text, View} from 'react-native';
import {Card, NumberContainer} from '../../components';
import React, {useEffect, useRef, useState} from 'react';

import {colors} from '../../constants';
import {styles} from './styles';

const RNG = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min) + min);
	if (randomNumber === exclude) {
		return RNG(min, max, exclude);
	} else {
		return randomNumber;
	}
};
const GameScreen = ({selectedNumber, onHandleGameOver}) => {
	const [currentGuess, setCurrentGuess] = useState(RNG(1, 100, selectedNumber));
	const [tries, setTries] = useState(0);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (currentGuess === selectedNumber) onHandleGameOver(tries);
	}, [currentGuess, selectedNumber, onHandleGameOver]);

	const onHandlerNextGuess = direction => {
		if (
			(direction === 'lower' && currentGuess < selectedNumber) ||
			(direction === 'higher' && currentGuess > selectedNumber)
		) {
			Alert.alert('Try again', 'You are trying the wrong direction', [
				{text: 'Continue', style: 'cancel'},
			]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}
		const nextNumber = RNG(
			currentLow.current,
			currentHigh.current,
			currentGuess,
		);
		setCurrentGuess(nextNumber);
		setTries(tries => tries + 1);
	};

	return (
		<View style={styles.container}>
			<Card style={styles.content}>
				<Text style={styles.label}>Opponent's number</Text>
				<NumberContainer number={currentGuess} />
				<View style={styles.buttonContainer}>
					<Button
						title="minus"
						onPress={() => onHandlerNextGuess('lower')}
						color={colors.WarningColor}
					/>
					<Button
						title="plus"
						onPress={() => onHandlerNextGuess('higher')}
						color={colors.SecondaryColor}
					/>
				</View>
			</Card>
		</View>
	);
};

export default GameScreen;
