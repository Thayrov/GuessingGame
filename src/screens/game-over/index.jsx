import {Button, Text, View} from 'react-native';
import {Card, NumberContainer} from '../../components';
import React, {useEffect, useRef, useState} from 'react';

import {colors} from '../../constants';
import {styles} from './styles';

const GameOver = () => {
	return (
		<View style={styles.container}>
			<Card style={styles.content}>
				<Text style={styles.label}>
					You finished in the amount of tries shown below
				</Text>
				{/* <NumberContainer number={currentGuess} /> */}
				<View style={styles.buttonContainer}>
					<Button
						title="restart"
						onPress={() => {}}
						color={colors.SecondaryColor}
					/>
				</View>
			</Card>
		</View>
	);
};
export default GameOver;
