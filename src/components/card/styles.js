import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: colors.PrimaryColor,
		borderRadius: 10,
		shadowColor: colors.TextColor,
		shadowOffset: {
			width: 1,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12,
	},
});
