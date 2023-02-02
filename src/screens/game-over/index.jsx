import {Button, Image, Text, View} from 'react-native';

import {Card} from '../../components';
import {colors} from '../../constants';
import {styles} from './styles';

const GameOver = ({tries, daNumber, onHandlerRestart}) => {
	return (
		<View style={styles.container}>
			<Card style={styles.content}>
				<Text style={styles.label}>Game Over</Text>
				<Image
					source={require('../../../assets/img/undraw_old_day.png')}
					style={styles.image}
				/>
				<Text style={styles.label}>You got the number {daNumber}</Text>
				<Text style={styles.label}>In {tries} tries</Text>
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
