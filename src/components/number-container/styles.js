import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../constants';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	container: {
		height: height * 0.08,
		width: width * 0.17,
		marginVertical: height * 0.02,
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
		fontSize: height * 0.03,
		fontFamily: 'Silkscreen-Bold',
		color: colors.TextColor,
	},
});
