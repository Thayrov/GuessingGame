import {Button, Image, Text, View} from 'react-native';

import {Card} from '../../components';
import {colors} from '../../constants';
import {styles} from './styles';

const GameOver = (tries, selectedNumber, onHandlerRestart) => {
	return (
		<View style={styles.container}>
			<Card style={styles.content}>
				<Image
					source={{uri: '../../../assets/img/undraw_old_day_-6-x25.svg'}}
					style={styles.image}
				/>
				<Text style={styles.label}>
					You got the number {selectedNumber} in {tries} tries
				</Text>
				<View style={styles.buttonContainer}>
					<Button
						title="restart"
						onPress={onHandlerRestart}
						color={colors.SecondaryColor}
					/>
				</View>
			</Card>
		</View>
	);
};
export default GameOver;
