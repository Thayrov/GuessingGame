import {StyleSheet} from 'react-native';
import {colors} from '../../constants/themes/colors';

export const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: colors.EerieBlack,
		borderRadius: 10,
		shadowColor: colors.LightCyan,
		shadowOffset: {
			width: 1,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12,
	},
});
