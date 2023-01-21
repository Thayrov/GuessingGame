import {Card, Header} from './components';

import {StartGame} from './screens/index';
import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {styles} from './styles';

const App = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Header title='Guessing Game'/>
			<StartGame/>
		</View>
	);
};

export default App;
