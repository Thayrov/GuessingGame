import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.SecondaryColor,
		borderColor: colors.PrimaryColor,
		borderWidth: 2,
		borderRadius: 5,
		shadowColor: colors.TextColor,
		shadowOffset: {
			width: 1,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		elevation: 12,
	},
	number: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
