import {Button, Image, Text, View} from 'react-native';

import {Card} from '../../components';
import {colors} from '../../constants';
import {styles} from './styles';

const GameOver = ({isPortrait, tries, daNumber, onHandlerRestart}) => {
	return (
		<View style={isPortrait ? styles.container : styles.landscapeContainer}>
			<Card style={isPortrait ? styles.content : styles.landscapeContent}>
				<Image
					source={require('../../../assets/img/undraw_old_day.png')}
					style={isPortrait ? styles.image : styles.landscapeImage}
				/>
				<Text style={styles.label}>
					Game Over
					{'\n'}
					{'\n'}
					You got the number {daNumber}
					{'\n'}
					In {tries} tries
				</Text>
				<View
					style={
						isPortrait
							? styles.buttonContainer
							: styles.landscapeButtonContainer
					}>
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
