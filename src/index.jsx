import {ActivityIndicator, View} from 'react-native';
import {GameOver, GameScreen, StartGame} from './screens';

import {Header} from './components';
import {StatusBar} from 'expo-status-bar';
import {colors} from './constants';
import {styles} from './styles';
import {useFonts} from 'expo-font';
import {useState} from 'react';

const App = () => {
	const [loaded] = useFonts({
		'Silkscreen-Regular': require('../assets/fonts/Silkscreen-Regular.ttf'),
		'Silkscreen-Bold': require('../assets/fonts/Silkscreen-Bold.ttf'),
	});
	const [userNumber, SetUserNumber] = useState(null);
	const [triedTries, SetTriedTries] = useState(0);

	const onHandlerStartGame = selectedNumber => {
		SetUserNumber(selectedNumber);
	};

	const onHandleGameOver = tries => {
		SetTriedTries(tries);
	};

	const onHandlerRestart = () => {
		SetUserNumber(null);
		SetTriedTries(0);
	};

	const Content = () => {
		if (userNumber && triedTries <= 0) {
			return (
				<GameScreen daNumber={userNumber} onHandleGameOver={onHandleGameOver} />
			);
		}
		if (triedTries > 0) {
			return (
				<GameOver
					tries={triedTries}
					daNumber={userNumber}
					onHandlerRestart={onHandlerRestart}
				/>
			);
		}
		return <StartGame onHandlerStartGame={onHandlerStartGame} />;
	};

	if (!loaded) {
		return (
			<View style={styles.containerLoader}>
				<ActivityIndicator size="large" color={colors.SecondaryColor} />
			</View>
		);
	}
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header title="Guessing Game" />
			<Content />
		</View>
	);
};

export default App;
