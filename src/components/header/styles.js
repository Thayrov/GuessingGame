import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes/colors';

export const styles = StyleSheet.create({
	headerContainer: {
		paddingVertical: 50,
		backgroundColor: colors.EerieBlack,
	},
	headerContent: {
		textAlign: 'center',
		fontSize: 32,
		fontWeight: 'bold',
		color: colors.LightCyan,
	},
});
