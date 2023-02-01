import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../constants';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BGColor,
		paddingBottom: height * 0.1,
	},

	content: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: width * 0.04,
		paddingVertical: height * 0.04,
	},
	label: {
		fontSize: height * 0.02,
		color: colors.TextColor,
		paddingVertical: height * 0.01,
		textAlign: 'center',
		fontFamily: 'Silkscreen-Regular',
	},

	buttonContainer: {
		flexDirection: 'row',
		width: '75%',
		justifyContent: 'space-around',
		paddingTop: height * 0.02,
		paddingLeft: width * 0.06,
	},
});
