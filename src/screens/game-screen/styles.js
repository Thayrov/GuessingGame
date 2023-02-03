import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../constants';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BGColor,
		paddingVertical: height * 0.05,
		height: height * 0.8,
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: width * 0.04,
		paddingVertical: height * 0.04,
	},
	label: {
		fontSize: ((height * width) / 1000) * 0.04,
		color: colors.TextColor,
		paddingVertical: ((height * width) / 1000) * 0.01,
		textAlign: 'center',
		fontFamily: 'Silkscreen-Regular',
	},

	buttonContainer: {
		flexDirection: 'row',
		width: '75%',
		justifyContent: 'space-evenly',
		paddingTop: ((height * width) / 1000) * 0.05,
	},
});
