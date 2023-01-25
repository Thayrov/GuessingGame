import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
	headerContainer: {
		paddingVertical: 50,
		backgroundColor: colors.PrimaryColor,
	},
	headerContent: {
		textAlign: 'center',
		fontSize: 32,
		fontFamily: 'Silkscreen-Bold',
		color: colors.TextColor,
	},
});
