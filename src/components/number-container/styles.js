import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
		marginTop: 18,
		marginBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BGColor,
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
		fontSize: 26,
		fontFamily: 'Silkscreen-Bold',
		color: colors.TextColor,
	},
});
